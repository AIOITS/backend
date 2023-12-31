import { HttpException, Injectable } from '@nestjs/common'
import { HistoryPengisian, Prisma, PrismaClient, Stnk, SubsidyQuota } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { HistoryPengisianCreateInput } from './dto/history-pengisian-create.input'
import { StnkService } from 'src/stnk/stnk.service'
import { KtpService } from 'src/ktp/ktp.service'
import { UserService } from 'src/user/user.service'
import { HistoryPengisianGroupByArgs } from './dto/history-pengisian-group-by.args'

type StnkWithSubsidyQuota = Stnk&{
  subsidy_quota?: SubsidyQuota
}

@Injectable()
export class HistoryPengisianService {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly _stnkService: StnkService,
    private readonly _ktpService: KtpService,
    private readonly _userService: UserService,
  ) {}

  findAll(
    args: Prisma.HistoryPengisianFindManyArgs,
  ): Promise<Array<HistoryPengisian>> {
    return this._prismaService.historyPengisian.findMany(args)
  }

  findOne(args: Prisma.HistoryPengisianFindFirstArgs) {
    return this._prismaService.historyPengisian.findFirst(args)
  }

  aggregate(args: Prisma.HistoryPengisianAggregateArgs) {
    return this._prismaService.historyPengisian.aggregate(args)
  }

  groupBy(args: HistoryPengisianGroupByArgs) {
    return this._prismaService.historyPengisian.groupBy(args)
  }

  async create(createHistoryPengisianDto: HistoryPengisianCreateInput) {
    const {
      nomor_stnk,
      user_id,
      kategori_pengisian,
      device_id,
      jumlah,
      jenis_kendaraan,
      bbm_id,
    } = createHistoryPengisianDto
    const user = await this._userService.findOne({ where: { id: user_id } })
    if (!user) throw new HttpException('User not found', 400)

    if (jumlah > user.saldo) throw new HttpException('Saldo tidak mencukupi', 400)

    const stnk: StnkWithSubsidyQuota|null = await this._stnkService.findOne({
      where: { nomor_stnk, nik: user.nik },
      include: {
        subsidy_quota: true
      }
    })
    if (!stnk) throw new HttpException('STNK not found', 400)
    if (!stnk.subsidy_quota) throw new HttpException('Terdapat kesalahan pada sistem', 500)

    const device = await this._prismaService.device.findFirst({
      where: {
        device_id,
      },
    })
    if (!device) throw new HttpException('device is not registered', 401)

    const bbm = await this._prismaService.bbm.findFirst({
      where: {
        id: bbm_id,
      },
    })
    if (!bbm) throw new HttpException('bbm is not found', 400)

    const jumlahLiter = jumlah / bbm.price_per_liter

    if (bbm.is_subsidi) {
      if (jumlahLiter > stnk.subsidy_quota.quota) throw new HttpException('Kuota subsidi tidak mencukupi', 400)

      await this._prismaService.subsidyQuota.update({
        where: { nomor_stnk: stnk.nomor_stnk },
        data: {
          quota: stnk.subsidy_quota.quota - jumlahLiter,
        },
      })
    }

    await this._userService.update({
      where: { id: user.id },
      data: {
        saldo: user.saldo - jumlah
      }
    })

    const createdHistoryPengisian =
      await this._prismaService.historyPengisian.create({
        data: {
          kategori_pengisian,
          jenis_kendaraan,
          jumlah: jumlahLiter,
          spbu: { connect: { id: device.spbu_id } },
          device: { connect: { device_id: device.device_id } },
          bbm: { connect: { id: bbm.id } },
          user: { connect: { id: user_id } },
          stnk: { connect: { nomor_stnk } },
        },
      })

    return createdHistoryPengisian
  }
}

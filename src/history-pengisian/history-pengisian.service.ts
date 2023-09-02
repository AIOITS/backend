import { HttpException, Injectable } from '@nestjs/common'
import { HistoryPengisian, Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { HistoryPengisianCreateInput } from './dto/history-pengisian-create.input'
import { StnkService } from 'src/stnk/stnk.service'
import { KtpService } from 'src/ktp/ktp.service'
import { UserService } from 'src/user/user.service'

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

  async create(createHistoryPengisianDto: HistoryPengisianCreateInput) {
    const { nomor_stnk, user_id, kategori_pengisian, nama_spbu, jumlah } =
      createHistoryPengisianDto
    const user = await this._userService.findOne({ where: { id: user_id } })
    if (!user) throw new HttpException('User not found', 400)

    const stnk = await this._stnkService.findOne({
      where: { nomor_stnk, nik: user.nik },
    })
    if (!stnk) throw new HttpException('STNK not found', 400)

    if (user.kuota_subsidi < jumlah)
      throw new HttpException('Subsidy quota is insufficient', 400)

    await this._userService.update({
      where: { id: user_id },
      data: {
        ...user,
        kuota_subsidi: user.kuota_subsidi - jumlah,
      },
    })
    const createdHistoryPengisian =
      await this._prismaService.historyPengisian.create({
        data: {
          kategori_pengisian,
          nama_spbu,
          jumlah,
          user: { connect: { id: user_id } },
          stnk: { connect: { nomor_stnk } },
        },
      })

    return createdHistoryPengisian
  }
}

import { HttpException, Injectable } from '@nestjs/common'
import { Prisma, Stnk } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import StnkCreateInput from './dto/stnk-create.input'
import { UserService } from 'src/user/user.service'

@Injectable()
export class StnkService {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly _userService: UserService,
  ) {}

  findAll(args: Prisma.StnkFindManyArgs): Promise<Array<Stnk>> {
    return this._prismaService.stnk.findMany(args)
  }

  findOne(args: Prisma.StnkFindFirstArgs) {
    return this._prismaService.stnk.findFirst(args)
  }

  async create(createStnkDto: StnkCreateInput) {
    const { userId, ...data } = createStnkDto
    const user = this._userService.findOne({ where: { id: userId } })

    if (
      await this._prismaService.stnk.count({
        where: { nomor_stnk: data.nomor_stnk },
      })
    )
      throw new HttpException('Stnk sudah terdaftar', 400)

    if (
      !(await this._prismaService.pkb.count({
        where: { nomor_pkb: data.nomor_pkb },
      }))
    )
      throw new HttpException('Nomor PKB tersebut belum terdaftar', 400)

    if (
      await this._prismaService.stnk.count({
        where: { nomor_pkb: data.nomor_pkb },
      })
    )
      throw new HttpException(
        'Stnk dengan nomor PKB tersebut sudah terdaftar',
        400,
      )

    if (
      await this._prismaService.stnk.count({
        where: { nomor_polisi: data.nomor_polisi },
      })
    )
      throw new HttpException('Nomor Polisi telah terdaftar', 400)
    const nik = (await user).nik
    const createdStnk = await this._prismaService.stnk.create({
      data: {
        ...data,
        berlaku: new Date(data.berlaku),
        nik,
      },
    })

    return {
      ...createdStnk,
      berlaku: createdStnk.berlaku.toISOString().split('T')[0],
    }
  }
}

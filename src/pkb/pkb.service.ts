import { HttpException, Injectable } from '@nestjs/common'
import { Pkb, Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { PkbCreateInput } from './dto/pkb-create.input'

@Injectable()
export class PkbService {
  constructor(private readonly _prismaService: PrismaService) {}

  findAll(args: Prisma.PkbFindManyArgs): Promise<Array<Pkb>> {
    return this._prismaService.pkb.findMany(args)
  }

  findOne(args: Prisma.PkbFindFirstArgs) {
    return this._prismaService.pkb.findFirst(args)
  }

  async create(createPkbDto: PkbCreateInput) {
    const { userId, nomor_pkb, ...data } = createPkbDto

    const pkb = await this._prismaService.pkb.findFirst({where: {nomor_pkb}})
    if (pkb) throw new HttpException('Nomor PKB tersebut telah digunakan', 400)
    
    const createdSim = await this._prismaService.pkb.create({
      data: {
        nomor_pkb,
        ...data,
      },
    })

    return createdSim
  }
}

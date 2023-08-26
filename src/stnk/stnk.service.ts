import { Injectable } from '@nestjs/common'
import { Prisma, Stnk } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class StnkService {
  constructor(private readonly _prismaService: PrismaService) {}

  findAll(args: Prisma.StnkFindManyArgs): Promise<Array<Stnk>> {
    return this._prismaService.stnk.findMany(args)
  }

  findOne(args: Prisma.StnkFindFirstArgs) {
    return this._prismaService.stnk.findFirst(args)
  }
}

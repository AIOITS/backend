import { Injectable } from '@nestjs/common'
import { Pkb, Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class PkbService {
  constructor(private readonly _prismaService: PrismaService) {}

  findAll(args: Prisma.PkbFindManyArgs): Promise<Array<Pkb>> {
    return this._prismaService.pkb.findMany(args)
  }

  findOne(args: Prisma.PkbFindFirstArgs) {
    return this._prismaService.pkb.findFirst(args)
  }
}

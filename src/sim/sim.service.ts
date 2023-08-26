import { Injectable } from '@nestjs/common'
import { Prisma, Sim } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class SimService {
  constructor(private readonly _prismaService: PrismaService) {}

  findAll(args: Prisma.SimFindManyArgs): Promise<Array<Sim>> {
    return this._prismaService.sim.findMany(args)
  }

  findOne(args: Prisma.SimFindFirstArgs) {
    return this._prismaService.sim.findFirst(args)
  }
}

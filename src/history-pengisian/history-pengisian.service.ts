import { Injectable } from '@nestjs/common'
import { HistoryPengisian, Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class HistoryPengisianService {
  constructor(private readonly _prismaService: PrismaService) {}

  findAll(
    args: Prisma.HistoryPengisianFindManyArgs,
  ): Promise<Array<HistoryPengisian>> {
    return this._prismaService.historyPengisian.findMany(args)
  }

  findOne(args: Prisma.HistoryPengisianFindFirstArgs) {
    return this._prismaService.historyPengisian.findFirst(args)
  }
}

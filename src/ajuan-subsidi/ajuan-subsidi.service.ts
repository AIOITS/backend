import { Injectable } from '@nestjs/common'
import { AjuanSubsidi, Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class AjuanSubsidiService {
  constructor(private readonly _prismaService: PrismaService) {}

  findAll(args: Prisma.AjuanSubsidiFindManyArgs): Promise<Array<AjuanSubsidi>> {
    return this._prismaService.ajuanSubsidi.findMany(args)
  }

  findOne(args: Prisma.AjuanSubsidiFindFirstArgs) {
    return this._prismaService.ajuanSubsidi.findFirst(args)
  }
}

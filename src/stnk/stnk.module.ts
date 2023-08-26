import { Module } from '@nestjs/common'
import { StnkService } from './stnk.service'
import { StnkController } from './stnk.controller'
import { PrismaService } from 'src/prisma/prisma.service'

@Module({
  controllers: [StnkController],
  providers: [StnkService, PrismaService],
})
export class StnkModule {}

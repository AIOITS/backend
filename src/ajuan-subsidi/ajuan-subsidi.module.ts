import { Module } from '@nestjs/common'
import { AjuanSubsidiService } from './ajuan-subsidi.service'
import { AjuanSubsidiController } from './ajuan-subsidi.controller'
import { PrismaService } from 'src/prisma/prisma.service'

@Module({
  controllers: [AjuanSubsidiController],
  providers: [AjuanSubsidiService, PrismaService],
})
export class AjuanSubsidiModule {}

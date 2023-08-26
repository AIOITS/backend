import { Module } from '@nestjs/common'
import { PkbService } from './pkb.service'
import { PkbController } from './pkb.controller'
import { PrismaService } from 'src/prisma/prisma.service'

@Module({
  controllers: [PkbController],
  providers: [PkbService, PrismaService],
})
export class PkbModule {}

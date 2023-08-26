import { Module } from '@nestjs/common'
import { SimService } from './sim.service'
import { SimController } from './sim.controller'
import { PrismaService } from 'src/prisma/prisma.service'

@Module({
  controllers: [SimController],
  providers: [SimService, PrismaService],
})
export class SimModule {}

import { Module } from '@nestjs/common'
import { HistoryPengisianService } from './history-pengisian.service'
import { HistoryPengisianController } from './history-pengisian.controller'
import { PrismaService } from 'src/prisma/prisma.service'

@Module({
  controllers: [HistoryPengisianController],
  providers: [HistoryPengisianService, PrismaService],
})
export class HistoryPengisianModule {}

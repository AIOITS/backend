import { Module } from '@nestjs/common'
import { HistoryPengisianService } from './history-pengisian.service'
import { HistoryPengisianController } from './history-pengisian.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { jwtModule } from 'config/jwtModule'
import { StnkService } from 'src/stnk/stnk.service'
import { KtpService } from 'src/ktp/ktp.service'
import { UserService } from 'src/user/user.service'

@Module({
  imports: [jwtModule],
  controllers: [HistoryPengisianController],
  providers: [
    HistoryPengisianService,
    PrismaService,
    StnkService,
    KtpService,
    UserService,
  ],
})
export class HistoryPengisianModule {}

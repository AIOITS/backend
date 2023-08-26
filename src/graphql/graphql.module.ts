import { Module } from '@nestjs/common'
import { GraphqlResolver, KtpResolver, StnkResolver, UserResolver } from './graphql.resolver'
import { UserService } from 'src/user/user.service'
import { PrismaService } from 'src/prisma/prisma.service'
import { KtpService } from 'src/ktp/ktp.service'
import { SimService } from 'src/sim/sim.service'
import { StnkService } from 'src/stnk/stnk.service'
import { PkbService } from 'src/pkb/pkb.service'
import { HistoryPengisianService } from 'src/history-pengisian/history-pengisian.service'
import { AjuanSubsidiService } from 'src/ajuan-subsidi/ajuan-subsidi.service'

@Module({
  providers: [
    PrismaService,
    UserResolver,
    KtpResolver,
    StnkResolver,
    GraphqlResolver,

    UserService,
    KtpService,
    SimService,
    StnkService,
    PkbService,
    HistoryPengisianService,
    AjuanSubsidiService,
  ],
})
export class GraphqlModule {}

import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { UserModule } from './user/user.module'
import { join } from 'path'
import { ScheduleModule } from '@nestjs/schedule'
import { PrismaService } from './prisma/prisma.service'
import { GraphqlModule } from './graphql/graphql.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { KtpModule } from './ktp/ktp.module'
import { SimModule } from './sim/sim.module'
import { AjuanSubsidiModule } from './ajuan-subsidi/ajuan-subsidi.module'
import { StnkModule } from './stnk/stnk.module'
import { PkbModule } from './pkb/pkb.module'
import { HistoryPengisianModule } from './history-pengisian/history-pengisian.module'
import { StorageModule } from './storage/storage.module'
import { TasksModule } from './tasks/tasks.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    GraphqlModule,
    AuthModule,
    KtpModule,
    SimModule,
    AjuanSubsidiModule,
    StnkModule,
    PkbModule,
    HistoryPengisianModule,
    StorageModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

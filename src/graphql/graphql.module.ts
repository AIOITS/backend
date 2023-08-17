import { Module } from '@nestjs/common'
import { GraphqlResolver } from './graphql.resolver'
import { UserService } from 'src/user/user.service'
import { PrismaService } from 'src/prisma/prisma.service'
import { KtpService } from 'src/ktp/ktp.service'

@Module({
  providers: [PrismaService, GraphqlResolver, UserService, KtpService],
})
export class GraphqlModule {}

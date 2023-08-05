import { Module } from '@nestjs/common';
import { GraphqlResolver } from './graphql.resolver';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    GraphqlResolver,
    UserService
  ]
})
export class GraphqlModule {}

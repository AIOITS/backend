import { Resolver, Query, Args } from '@nestjs/graphql'
import { UserService } from 'src/user/user.service'
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { KtpService } from 'src/ktp/ktp.service'
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args'
import { Ktp } from 'src/@generated/prisma-nestjs-graphql/ktp/ktp.model'
import { FindManyKtpArgs } from 'src/@generated/prisma-nestjs-graphql/ktp/find-many-ktp.args'

@Resolver()
export class GraphqlResolver {
  constructor(
    private readonly userService: UserService,
    private readonly ktpService: KtpService,
  ) {}

  @Query(() => [User], { name: 'user' })
  async getUsers(@Args() query: FindManyUserArgs) {
    return await this.userService.findAll(query)
  }

  @Query(() => [Ktp], { name: 'ktp' })
  async getAllKtp(@Args() query: FindManyKtpArgs) {
    return await this.ktpService.findAll(query)
  }
}

import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';

@Resolver()
export class GraphqlResolver {
  constructor(
    private readonly userService: UserService
  ) {}

  @Query(() => [User], { name: 'user' })
  async getUsers(@Args() query: FindManyUserArgs) {
    return await this.userService.findAll(query);
  }
}

import { Test, TestingModule } from '@nestjs/testing'
import { UserResolver } from './graphql.resolver'
import { PrismaService } from 'src/prisma/prisma.service'
import { UserService } from 'src/user/user.service'

describe('GraphqlResolver', () => {
  let resolver: UserResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, UserResolver, UserService],
    }).compile()

    resolver = module.get<UserResolver>(UserResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})

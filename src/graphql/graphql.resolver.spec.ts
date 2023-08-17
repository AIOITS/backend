import { Test, TestingModule } from '@nestjs/testing'
import { GraphqlResolver } from './graphql.resolver'
import { PrismaService } from 'src/prisma/prisma.service'
import { UserService } from 'src/user/user.service'

describe('GraphqlResolver', () => {
  let resolver: GraphqlResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, GraphqlResolver, UserService],
    }).compile()

    resolver = module.get<GraphqlResolver>(GraphqlResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})

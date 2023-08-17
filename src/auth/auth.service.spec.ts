import { Test, TestingModule } from '@nestjs/testing'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModule } from 'src/user/user.module'
import { jwtModule } from 'config/jwtModule'
import { UserService } from 'src/user/user.service'
import { PrismaService } from 'src/prisma/prisma.service'

describe('AuthService', () => {
  let service: AuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserModule, jwtModule],
      controllers: [AuthController],
      providers: [AuthService, UserService, PrismaService],
    }).compile()

    service = module.get<AuthService>(AuthService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

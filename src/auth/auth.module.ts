import { Module } from '@nestjs/common'

import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModule } from 'src/user/user.module'
import { jwtModule } from 'config/jwtModule'
import { UserService } from 'src/user/user.service'
import { PrismaService } from 'src/prisma/prisma.service'

@Module({
  imports: [UserModule, jwtModule],
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService],
})
export class AuthModule {}

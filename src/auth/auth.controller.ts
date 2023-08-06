import {
  Controller,
  Post,
  Body,
  HttpCode,
} from '@nestjs/common'

import { AuthService } from './auth.service'

import { LoginAuthDto } from './dto/login-auth.dto'
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  async validate(@Body() loginAuthDto: LoginAuthDto) {
    const data = await this.authService.signIn(loginAuthDto)
    return {
      statusCode: 200,
      data: [data],
    }
  }

  @Post('register')
  async create(@Body() registerAuthDto: UserCreateInput) {
    const data = await this.authService.register(registerAuthDto)
    return {
      statusCode: 201,
      data: [data],
    }
  }
}

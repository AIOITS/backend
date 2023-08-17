import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common'

import { AuthService } from './auth.service'

import { LoginAuthDto } from './dto/login-auth.dto'
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiProperty,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'
import { errorResponse } from 'common/error-response'
import { UserCreateInput } from './dto/user-create.input'

class SuccessLogin {
  @ApiProperty({
    description: 'User ID',
  })
  id: number
  @ApiProperty()
  access_token: string
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Login Successfully',
    type: SuccessLogin,
  })
  @ApiUnauthorizedResponse({
    description: 'Login Failed',
    type: errorResponse,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type: errorResponse,
  })
  async validate(@Body() loginAuthDto: LoginAuthDto) {
    const data = await this.authService.signIn(loginAuthDto)
    return {
      statusCode: 200,
      data,
    }
  }

  @ApiOkResponse({
    description: 'Login Successfully',
    type: SuccessLogin,
  })
  @ApiUnauthorizedResponse({
    description: 'Login Failed',
    type: errorResponse,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type: errorResponse,
  })
  @Post('government')
  @HttpCode(HttpStatus.OK)
  async validateGovernment(@Body() loginAuthDto: LoginAuthDto) {
    const data = await this.authService.signInGovernment(loginAuthDto)
    return {
      statusCode: 200,
      data,
    }
  }

  @ApiCreatedResponse({
    description: 'Register Successfully',
    type: UserCreateInput,
  })
  @ApiUnauthorizedResponse({
    description: 'Register Failed',
    type: errorResponse,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type: errorResponse,
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() registerAuthDto: UserCreateInput) {
    const data = await this.authService.register(registerAuthDto)
    return {
      statusCode: HttpStatus.CREATED,
      data: [data],
    }
  }
}

import {
  Injectable,
  UnauthorizedException,
  HttpException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UserService } from 'src/user/user.service'
import { LoginAuthDto } from './dto/login-auth.dto'
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(loginAuthDto: LoginAuthDto) {
    const { email, phone, password } = loginAuthDto
    if (!email && !phone) throw new HttpException('Email or phone cannot be empty', 400)

    const user = email
      ? await this.usersService.validateWithEmail(email, password)
      : await this.usersService.validateWithPhone(phone, password)
    if (!user) throw new UnauthorizedException()

    const payload = {
      id: user.id,
      role: user.role
    }
    return {
      id: user.id,
      access_token: await this.jwtService.signAsync(payload),
    }
  }

  async signInGovernment(loginAuthDto: LoginAuthDto) {
    const { email, phone, password } = loginAuthDto
    if (!email && !phone) throw new HttpException('Email or phone cannot be empty', 400)

    const user = email
      ? await this.usersService.validateWithEmail(email, password)
      : await this.usersService.validateWithPhone(phone, password)
    if (!user) throw new UnauthorizedException()
    if (user.role !== 0) throw new UnauthorizedException()

    const payload = {
      id: user.id,
      role: user.role
    }

    return {
      id: user.id,
      access_token: await this.jwtService.signAsync(payload),
    }
  }

  async register(registerAuthDto: UserCreateInput) {
    const { email, phone } = registerAuthDto
    if (!email && !phone) throw new HttpException('Email or phone cannot be empty', 400)
    const user = await this.usersService.create(registerAuthDto)
    if (!user) throw new HttpException('User gagal ditambahkan', 500)

    const payload = {
      id: user.id,
      role: user.role
    }
    return {
      id: user.id,
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}

import { HttpException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import * as argon2 from 'argon2'
import { Prisma } from '@prisma/client'
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { UserCreateInput } from 'src/auth/dto/user-create.input'
import { UserCreateInput as PrismaUserCreatedInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input'
@Injectable()
export class UserService {
  constructor(private readonly _prismaService: PrismaService) {}

  async create(createUserDto: UserCreateInput) {
    const { nik, email, phone, ...data } = createUserDto
    const ktp = await this._prismaService.ktp.findFirst({
      where: { nik },
      include: { user: true },
    })

    if (!ktp) throw new HttpException('NIK not found', 400)
    if (ktp.user)
      throw new HttpException('NIK was used in another account', 400)

    if (email && (await this._prismaService.user.count({ where: { email } })))
      throw new HttpException('Email already registered', 400)
    if (phone && (await this._prismaService.user.count({ where: { phone } })))
      throw new HttpException('Phone already registered', 400)

    const prismaUserCreateInput = new PrismaUserCreatedInput()
    Object.assign(prismaUserCreateInput, {
      ...data,
      email,
      phone,
      password: await argon2.hash(createUserDto.password),
      ktp: {
        connect: { nik },
      },
    })

    return this._prismaService.user.create({
      data: prismaUserCreateInput,
    })
  }

  findAll(args: Prisma.UserFindManyArgs) {
    return this._prismaService.user.findMany(args)
  }

  findOne(args: Prisma.UserFindFirstArgs) {
    return this._prismaService.user.findFirst(args)
  }

  update(args: Prisma.UserUpdateArgs) {
    return this._prismaService.user.update(args)
  }

  async validateWithEmail(
    email: string,
    password: string,
  ): Promise<User | null> {
    const user = await this._prismaService.user.findFirst({ where: { email } })
    if (!user) throw new HttpException("User doesn't exists", 400)

    if (await argon2.verify(user.password, password)) return user
    return null
  }

  async validateWithPhone(
    phone: string,
    password: string,
  ): Promise<User | null> {
    const user = await this._prismaService.user.findFirst({ where: { phone } })
    if (!user) throw new HttpException("User doesn't exists", 400)

    if (await argon2.verify(user.password, password)) return user
    return null
  }
}

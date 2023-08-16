import { HttpException, Injectable } from '@nestjs/common';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import * as argon2 from 'argon2'
@Injectable()
export class UserService {
  constructor(
    private readonly _prismaService: PrismaService
  ){}

  async create(createUserDto: UserCreateInput) {
    const { ktp, email, phone } = createUserDto
    if (await this._prismaService.kTP.count({where: { nik: ktp.connect.nik }})) throw new HttpException('NIK already registered', 400)
    if (await this._prismaService.user.count({where: { email }})) throw new HttpException('Email already registered', 400)
    if (await this._prismaService.user.count({where: { phone }})) throw new HttpException('Phone already registered', 400)

    const user = new User()
    Object.assign(user, createUserDto)
    createUserDto.password = await argon2.hash(createUserDto.password)
    return this._prismaService.user.create({
      data: createUserDto
    })
  }

  findAll(args: FindManyUserArgs) {
    return this._prismaService.user.findMany(args);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async validateWithEmail(email: string, password: string): Promise<User | null> {
    const user = await this._prismaService.user.findFirst({ where: { email } })
    if (!user) throw new HttpException("User doesn't exists", 400)

    if (await argon2.verify(user.password, password)) return user
    return null
  }

  async validateWithPhone(phone: string, password: string): Promise<User | null> {
    const user = await this._prismaService.user.findFirst({ where: { phone } })
    if (!user) throw new HttpException("User doesn't exists", 400)

    if (await argon2.verify(user.password, password)) return user
    return null
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}

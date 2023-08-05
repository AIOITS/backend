import { HttpException, Injectable } from '@nestjs/common';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
@Injectable()
export class UserService {
  constructor(
    private readonly _prismaService: PrismaService
  ){}

  async create(createUserDto: UserCreateInput) {
    const { nik, email, phone } = createUserDto
    console.log('testing::', this._prismaService.user.count({where: { nik }}))
    if (await this._prismaService.user.count({where: { nik }})) throw new HttpException('Email already exists', 400)
    if (await this._prismaService.user.count({where: { email }})) throw new HttpException('Email already exists', 400)
    if (await this._prismaService.user.count({where: { phone }})) throw new HttpException('Email already exists', 400)

    const user = new User()
    Object.assign(user, createUserDto)
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

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}

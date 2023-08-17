import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { UserWhereUniqueInput } from './user-where-unique.input'
import { Type } from 'class-transformer'
import { UserCreateWithoutKtpInput } from './user-create-without-ktp.input'

@InputType()
export class UserCreateOrConnectWithoutKtpInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'nik' | 'email' | 'phone'>

  @Field(() => UserCreateWithoutKtpInput, { nullable: false })
  @Type(() => UserCreateWithoutKtpInput)
  create!: UserCreateWithoutKtpInput
}

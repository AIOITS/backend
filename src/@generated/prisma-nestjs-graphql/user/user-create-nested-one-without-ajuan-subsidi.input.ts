import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserCreateWithoutAjuan_subsidiInput } from './user-create-without-ajuan-subsidi.input'
import { Type } from 'class-transformer'
import { UserCreateOrConnectWithoutAjuan_subsidiInput } from './user-create-or-connect-without-ajuan-subsidi.input'
import { Prisma } from '@prisma/client'
import { UserWhereUniqueInput } from './user-where-unique.input'

@InputType()
export class UserCreateNestedOneWithoutAjuan_subsidiInput {
  @Field(() => UserCreateWithoutAjuan_subsidiInput, { nullable: true })
  @Type(() => UserCreateWithoutAjuan_subsidiInput)
  create?: UserCreateWithoutAjuan_subsidiInput

  @Field(() => UserCreateOrConnectWithoutAjuan_subsidiInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutAjuan_subsidiInput)
  connectOrCreate?: UserCreateOrConnectWithoutAjuan_subsidiInput

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'nik' | 'email' | 'phone'
  >
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserCreateWithoutHistory_pengisianInput } from './user-create-without-history-pengisian.input'
import { Type } from 'class-transformer'
import { UserCreateOrConnectWithoutHistory_pengisianInput } from './user-create-or-connect-without-history-pengisian.input'
import { UserUpsertWithoutHistory_pengisianInput } from './user-upsert-without-history-pengisian.input'
import { UserWhereInput } from './user-where.input'
import { Prisma } from '@prisma/client'
import { UserWhereUniqueInput } from './user-where-unique.input'
import { UserUpdateToOneWithWhereWithoutHistory_pengisianInput } from './user-update-to-one-with-where-without-history-pengisian.input'

@InputType()
export class UserUpdateOneWithoutHistory_pengisianNestedInput {
  @Field(() => UserCreateWithoutHistory_pengisianInput, { nullable: true })
  @Type(() => UserCreateWithoutHistory_pengisianInput)
  create?: UserCreateWithoutHistory_pengisianInput

  @Field(() => UserCreateOrConnectWithoutHistory_pengisianInput, {
    nullable: true,
  })
  @Type(() => UserCreateOrConnectWithoutHistory_pengisianInput)
  connectOrCreate?: UserCreateOrConnectWithoutHistory_pengisianInput

  @Field(() => UserUpsertWithoutHistory_pengisianInput, { nullable: true })
  @Type(() => UserUpsertWithoutHistory_pengisianInput)
  upsert?: UserUpsertWithoutHistory_pengisianInput

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  disconnect?: UserWhereInput

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  delete?: UserWhereInput

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'nik' | 'email' | 'phone'
  >

  @Field(() => UserUpdateToOneWithWhereWithoutHistory_pengisianInput, {
    nullable: true,
  })
  @Type(() => UserUpdateToOneWithWhereWithoutHistory_pengisianInput)
  update?: UserUpdateToOneWithWhereWithoutHistory_pengisianInput
}

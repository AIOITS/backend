import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { UserWhereUniqueInput } from './user-where-unique.input'
import { Type } from 'class-transformer'
import { UserCreateWithoutHistory_pengisianInput } from './user-create-without-history-pengisian.input'

@InputType()
export class UserCreateOrConnectWithoutHistory_pengisianInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'nik' | 'email' | 'phone'>

  @Field(() => UserCreateWithoutHistory_pengisianInput, { nullable: false })
  @Type(() => UserCreateWithoutHistory_pengisianInput)
  create!: UserCreateWithoutHistory_pengisianInput
}

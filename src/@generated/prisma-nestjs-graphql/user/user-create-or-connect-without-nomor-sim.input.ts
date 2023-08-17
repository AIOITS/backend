import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { UserWhereUniqueInput } from './user-where-unique.input'
import { Type } from 'class-transformer'
import { UserCreateWithoutNomor_simInput } from './user-create-without-nomor-sim.input'

@InputType()
export class UserCreateOrConnectWithoutNomor_simInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'nik' | 'email' | 'phone'>

  @Field(() => UserCreateWithoutNomor_simInput, { nullable: false })
  @Type(() => UserCreateWithoutNomor_simInput)
  create!: UserCreateWithoutNomor_simInput
}

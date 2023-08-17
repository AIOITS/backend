import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserCreateWithoutNomor_simInput } from './user-create-without-nomor-sim.input'
import { Type } from 'class-transformer'
import { UserCreateOrConnectWithoutNomor_simInput } from './user-create-or-connect-without-nomor-sim.input'
import { Prisma } from '@prisma/client'
import { UserWhereUniqueInput } from './user-where-unique.input'

@InputType()
export class UserCreateNestedOneWithoutNomor_simInput {
  @Field(() => UserCreateWithoutNomor_simInput, { nullable: true })
  @Type(() => UserCreateWithoutNomor_simInput)
  create?: UserCreateWithoutNomor_simInput

  @Field(() => UserCreateOrConnectWithoutNomor_simInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutNomor_simInput)
  connectOrCreate?: UserCreateOrConnectWithoutNomor_simInput

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'nik' | 'email' | 'phone'
  >
}

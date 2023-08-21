import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SimCreateWithoutUserInput } from './sim-create-without-user.input'
import { Type } from 'class-transformer'
import { SimCreateOrConnectWithoutUserInput } from './sim-create-or-connect-without-user.input'
import { SimCreateManyUserInputEnvelope } from './sim-create-many-user-input-envelope.input'
import { Prisma } from '@prisma/client'
import { SimWhereUniqueInput } from './sim-where-unique.input'

@InputType()
export class SimCreateNestedManyWithoutUserInput {
  @Field(() => [SimCreateWithoutUserInput], { nullable: true })
  @Type(() => SimCreateWithoutUserInput)
  create?: Array<SimCreateWithoutUserInput>

  @Field(() => [SimCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => SimCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<SimCreateOrConnectWithoutUserInput>

  @Field(() => SimCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => SimCreateManyUserInputEnvelope)
  createMany?: SimCreateManyUserInputEnvelope

  @Field(() => [SimWhereUniqueInput], { nullable: true })
  @Type(() => SimWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>>
}

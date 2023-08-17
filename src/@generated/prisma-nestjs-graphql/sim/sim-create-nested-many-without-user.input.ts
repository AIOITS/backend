import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SIMCreateWithoutUserInput } from './sim-create-without-user.input'
import { Type } from 'class-transformer'
import { SIMCreateOrConnectWithoutUserInput } from './sim-create-or-connect-without-user.input'
import { SIMCreateManyUserInputEnvelope } from './sim-create-many-user-input-envelope.input'
import { Prisma } from '@prisma/client'
import { SIMWhereUniqueInput } from './sim-where-unique.input'

@InputType()
export class SIMCreateNestedManyWithoutUserInput {
  @Field(() => [SIMCreateWithoutUserInput], { nullable: true })
  @Type(() => SIMCreateWithoutUserInput)
  create?: Array<SIMCreateWithoutUserInput>

  @Field(() => [SIMCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => SIMCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<SIMCreateOrConnectWithoutUserInput>

  @Field(() => SIMCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => SIMCreateManyUserInputEnvelope)
  createMany?: SIMCreateManyUserInputEnvelope

  @Field(() => [SIMWhereUniqueInput], { nullable: true })
  @Type(() => SIMWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SIMWhereUniqueInput, 'nomor_sim'>>
}

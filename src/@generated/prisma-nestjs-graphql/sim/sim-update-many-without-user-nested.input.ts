import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SimCreateWithoutUserInput } from './sim-create-without-user.input'
import { Type } from 'class-transformer'
import { SimCreateOrConnectWithoutUserInput } from './sim-create-or-connect-without-user.input'
import { SimUpsertWithWhereUniqueWithoutUserInput } from './sim-upsert-with-where-unique-without-user.input'
import { SimCreateManyUserInputEnvelope } from './sim-create-many-user-input-envelope.input'
import { Prisma } from '@prisma/client'
import { SimWhereUniqueInput } from './sim-where-unique.input'
import { SimUpdateWithWhereUniqueWithoutUserInput } from './sim-update-with-where-unique-without-user.input'
import { SimUpdateManyWithWhereWithoutUserInput } from './sim-update-many-with-where-without-user.input'
import { SimScalarWhereInput } from './sim-scalar-where.input'

@InputType()
export class SimUpdateManyWithoutUserNestedInput {
  @Field(() => [SimCreateWithoutUserInput], { nullable: true })
  @Type(() => SimCreateWithoutUserInput)
  create?: Array<SimCreateWithoutUserInput>

  @Field(() => [SimCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => SimCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<SimCreateOrConnectWithoutUserInput>

  @Field(() => [SimUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  @Type(() => SimUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<SimUpsertWithWhereUniqueWithoutUserInput>

  @Field(() => SimCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => SimCreateManyUserInputEnvelope)
  createMany?: SimCreateManyUserInputEnvelope

  @Field(() => [SimWhereUniqueInput], { nullable: true })
  @Type(() => SimWhereUniqueInput)
  set?: Array<Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>>

  @Field(() => [SimWhereUniqueInput], { nullable: true })
  @Type(() => SimWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>>

  @Field(() => [SimWhereUniqueInput], { nullable: true })
  @Type(() => SimWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>>

  @Field(() => [SimWhereUniqueInput], { nullable: true })
  @Type(() => SimWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>>

  @Field(() => [SimUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  @Type(() => SimUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<SimUpdateWithWhereUniqueWithoutUserInput>

  @Field(() => [SimUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => SimUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<SimUpdateManyWithWhereWithoutUserInput>

  @Field(() => [SimScalarWhereInput], { nullable: true })
  @Type(() => SimScalarWhereInput)
  deleteMany?: Array<SimScalarWhereInput>
}

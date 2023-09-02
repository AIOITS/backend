import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HistoryPengisianCreateWithoutUserInput } from './history-pengisian-create-without-user.input'
import { Type } from 'class-transformer'
import { HistoryPengisianCreateOrConnectWithoutUserInput } from './history-pengisian-create-or-connect-without-user.input'
import { HistoryPengisianUpsertWithWhereUniqueWithoutUserInput } from './history-pengisian-upsert-with-where-unique-without-user.input'
import { HistoryPengisianCreateManyUserInputEnvelope } from './history-pengisian-create-many-user-input-envelope.input'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { HistoryPengisianUpdateWithWhereUniqueWithoutUserInput } from './history-pengisian-update-with-where-unique-without-user.input'
import { HistoryPengisianUpdateManyWithWhereWithoutUserInput } from './history-pengisian-update-many-with-where-without-user.input'
import { HistoryPengisianScalarWhereInput } from './history-pengisian-scalar-where.input'

@InputType()
export class HistoryPengisianUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [HistoryPengisianCreateWithoutUserInput], { nullable: true })
  @Type(() => HistoryPengisianCreateWithoutUserInput)
  create?: Array<HistoryPengisianCreateWithoutUserInput>

  @Field(() => [HistoryPengisianCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<HistoryPengisianCreateOrConnectWithoutUserInput>

  @Field(() => [HistoryPengisianUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<HistoryPengisianUpsertWithWhereUniqueWithoutUserInput>

  @Field(() => HistoryPengisianCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => HistoryPengisianCreateManyUserInputEnvelope)
  createMany?: HistoryPengisianCreateManyUserInputEnvelope

  @Field(() => [HistoryPengisianWhereUniqueInput], { nullable: true })
  @Type(() => HistoryPengisianWhereUniqueInput)
  set?: Array<Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>>

  @Field(() => [HistoryPengisianWhereUniqueInput], { nullable: true })
  @Type(() => HistoryPengisianWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>>

  @Field(() => [HistoryPengisianWhereUniqueInput], { nullable: true })
  @Type(() => HistoryPengisianWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>>

  @Field(() => [HistoryPengisianWhereUniqueInput], { nullable: true })
  @Type(() => HistoryPengisianWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>>

  @Field(() => [HistoryPengisianUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<HistoryPengisianUpdateWithWhereUniqueWithoutUserInput>

  @Field(() => [HistoryPengisianUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<HistoryPengisianUpdateManyWithWhereWithoutUserInput>

  @Field(() => [HistoryPengisianScalarWhereInput], { nullable: true })
  @Type(() => HistoryPengisianScalarWhereInput)
  deleteMany?: Array<HistoryPengisianScalarWhereInput>
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HistoryPengisianCreateWithoutSpbuInput } from './history-pengisian-create-without-spbu.input'
import { Type } from 'class-transformer'
import { HistoryPengisianCreateOrConnectWithoutSpbuInput } from './history-pengisian-create-or-connect-without-spbu.input'
import { HistoryPengisianUpsertWithWhereUniqueWithoutSpbuInput } from './history-pengisian-upsert-with-where-unique-without-spbu.input'
import { HistoryPengisianCreateManySpbuInputEnvelope } from './history-pengisian-create-many-spbu-input-envelope.input'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { HistoryPengisianUpdateWithWhereUniqueWithoutSpbuInput } from './history-pengisian-update-with-where-unique-without-spbu.input'
import { HistoryPengisianUpdateManyWithWhereWithoutSpbuInput } from './history-pengisian-update-many-with-where-without-spbu.input'
import { HistoryPengisianScalarWhereInput } from './history-pengisian-scalar-where.input'

@InputType()
export class HistoryPengisianUncheckedUpdateManyWithoutSpbuNestedInput {
  @Field(() => [HistoryPengisianCreateWithoutSpbuInput], { nullable: true })
  @Type(() => HistoryPengisianCreateWithoutSpbuInput)
  create?: Array<HistoryPengisianCreateWithoutSpbuInput>

  @Field(() => [HistoryPengisianCreateOrConnectWithoutSpbuInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianCreateOrConnectWithoutSpbuInput)
  connectOrCreate?: Array<HistoryPengisianCreateOrConnectWithoutSpbuInput>

  @Field(() => [HistoryPengisianUpsertWithWhereUniqueWithoutSpbuInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianUpsertWithWhereUniqueWithoutSpbuInput)
  upsert?: Array<HistoryPengisianUpsertWithWhereUniqueWithoutSpbuInput>

  @Field(() => HistoryPengisianCreateManySpbuInputEnvelope, { nullable: true })
  @Type(() => HistoryPengisianCreateManySpbuInputEnvelope)
  createMany?: HistoryPengisianCreateManySpbuInputEnvelope

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

  @Field(() => [HistoryPengisianUpdateWithWhereUniqueWithoutSpbuInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianUpdateWithWhereUniqueWithoutSpbuInput)
  update?: Array<HistoryPengisianUpdateWithWhereUniqueWithoutSpbuInput>

  @Field(() => [HistoryPengisianUpdateManyWithWhereWithoutSpbuInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianUpdateManyWithWhereWithoutSpbuInput)
  updateMany?: Array<HistoryPengisianUpdateManyWithWhereWithoutSpbuInput>

  @Field(() => [HistoryPengisianScalarWhereInput], { nullable: true })
  @Type(() => HistoryPengisianScalarWhereInput)
  deleteMany?: Array<HistoryPengisianScalarWhereInput>
}

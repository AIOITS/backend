import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HistoryPengisianCreateWithoutStnkInput } from './history-pengisian-create-without-stnk.input'
import { Type } from 'class-transformer'
import { HistoryPengisianCreateOrConnectWithoutStnkInput } from './history-pengisian-create-or-connect-without-stnk.input'
import { HistoryPengisianUpsertWithWhereUniqueWithoutStnkInput } from './history-pengisian-upsert-with-where-unique-without-stnk.input'
import { HistoryPengisianCreateManyStnkInputEnvelope } from './history-pengisian-create-many-stnk-input-envelope.input'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { HistoryPengisianUpdateWithWhereUniqueWithoutStnkInput } from './history-pengisian-update-with-where-unique-without-stnk.input'
import { HistoryPengisianUpdateManyWithWhereWithoutStnkInput } from './history-pengisian-update-many-with-where-without-stnk.input'
import { HistoryPengisianScalarWhereInput } from './history-pengisian-scalar-where.input'

@InputType()
export class HistoryPengisianUncheckedUpdateManyWithoutStnkNestedInput {
  @Field(() => [HistoryPengisianCreateWithoutStnkInput], { nullable: true })
  @Type(() => HistoryPengisianCreateWithoutStnkInput)
  create?: Array<HistoryPengisianCreateWithoutStnkInput>

  @Field(() => [HistoryPengisianCreateOrConnectWithoutStnkInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianCreateOrConnectWithoutStnkInput)
  connectOrCreate?: Array<HistoryPengisianCreateOrConnectWithoutStnkInput>

  @Field(() => [HistoryPengisianUpsertWithWhereUniqueWithoutStnkInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianUpsertWithWhereUniqueWithoutStnkInput)
  upsert?: Array<HistoryPengisianUpsertWithWhereUniqueWithoutStnkInput>

  @Field(() => HistoryPengisianCreateManyStnkInputEnvelope, { nullable: true })
  @Type(() => HistoryPengisianCreateManyStnkInputEnvelope)
  createMany?: HistoryPengisianCreateManyStnkInputEnvelope

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

  @Field(() => [HistoryPengisianUpdateWithWhereUniqueWithoutStnkInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianUpdateWithWhereUniqueWithoutStnkInput)
  update?: Array<HistoryPengisianUpdateWithWhereUniqueWithoutStnkInput>

  @Field(() => [HistoryPengisianUpdateManyWithWhereWithoutStnkInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianUpdateManyWithWhereWithoutStnkInput)
  updateMany?: Array<HistoryPengisianUpdateManyWithWhereWithoutStnkInput>

  @Field(() => [HistoryPengisianScalarWhereInput], { nullable: true })
  @Type(() => HistoryPengisianScalarWhereInput)
  deleteMany?: Array<HistoryPengisianScalarWhereInput>
}

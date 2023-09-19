import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HistoryPengisianCreateWithoutDeviceInput } from './history-pengisian-create-without-device.input'
import { Type } from 'class-transformer'
import { HistoryPengisianCreateOrConnectWithoutDeviceInput } from './history-pengisian-create-or-connect-without-device.input'
import { HistoryPengisianUpsertWithWhereUniqueWithoutDeviceInput } from './history-pengisian-upsert-with-where-unique-without-device.input'
import { HistoryPengisianCreateManyDeviceInputEnvelope } from './history-pengisian-create-many-device-input-envelope.input'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { HistoryPengisianUpdateWithWhereUniqueWithoutDeviceInput } from './history-pengisian-update-with-where-unique-without-device.input'
import { HistoryPengisianUpdateManyWithWhereWithoutDeviceInput } from './history-pengisian-update-many-with-where-without-device.input'
import { HistoryPengisianScalarWhereInput } from './history-pengisian-scalar-where.input'

@InputType()
export class HistoryPengisianUncheckedUpdateManyWithoutDeviceNestedInput {
  @Field(() => [HistoryPengisianCreateWithoutDeviceInput], { nullable: true })
  @Type(() => HistoryPengisianCreateWithoutDeviceInput)
  create?: Array<HistoryPengisianCreateWithoutDeviceInput>

  @Field(() => [HistoryPengisianCreateOrConnectWithoutDeviceInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianCreateOrConnectWithoutDeviceInput)
  connectOrCreate?: Array<HistoryPengisianCreateOrConnectWithoutDeviceInput>

  @Field(() => [HistoryPengisianUpsertWithWhereUniqueWithoutDeviceInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianUpsertWithWhereUniqueWithoutDeviceInput)
  upsert?: Array<HistoryPengisianUpsertWithWhereUniqueWithoutDeviceInput>

  @Field(() => HistoryPengisianCreateManyDeviceInputEnvelope, {
    nullable: true,
  })
  @Type(() => HistoryPengisianCreateManyDeviceInputEnvelope)
  createMany?: HistoryPengisianCreateManyDeviceInputEnvelope

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

  @Field(() => [HistoryPengisianUpdateWithWhereUniqueWithoutDeviceInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianUpdateWithWhereUniqueWithoutDeviceInput)
  update?: Array<HistoryPengisianUpdateWithWhereUniqueWithoutDeviceInput>

  @Field(() => [HistoryPengisianUpdateManyWithWhereWithoutDeviceInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianUpdateManyWithWhereWithoutDeviceInput)
  updateMany?: Array<HistoryPengisianUpdateManyWithWhereWithoutDeviceInput>

  @Field(() => [HistoryPengisianScalarWhereInput], { nullable: true })
  @Type(() => HistoryPengisianScalarWhereInput)
  deleteMany?: Array<HistoryPengisianScalarWhereInput>
}

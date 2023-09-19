import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { DeviceCreateWithoutSpbuInput } from './device-create-without-spbu.input'
import { Type } from 'class-transformer'
import { DeviceCreateOrConnectWithoutSpbuInput } from './device-create-or-connect-without-spbu.input'
import { DeviceUpsertWithWhereUniqueWithoutSpbuInput } from './device-upsert-with-where-unique-without-spbu.input'
import { DeviceCreateManySpbuInputEnvelope } from './device-create-many-spbu-input-envelope.input'
import { Prisma } from '@prisma/client'
import { DeviceWhereUniqueInput } from './device-where-unique.input'
import { DeviceUpdateWithWhereUniqueWithoutSpbuInput } from './device-update-with-where-unique-without-spbu.input'
import { DeviceUpdateManyWithWhereWithoutSpbuInput } from './device-update-many-with-where-without-spbu.input'
import { DeviceScalarWhereInput } from './device-scalar-where.input'

@InputType()
export class DeviceUpdateManyWithoutSpbuNestedInput {
  @Field(() => [DeviceCreateWithoutSpbuInput], { nullable: true })
  @Type(() => DeviceCreateWithoutSpbuInput)
  create?: Array<DeviceCreateWithoutSpbuInput>

  @Field(() => [DeviceCreateOrConnectWithoutSpbuInput], { nullable: true })
  @Type(() => DeviceCreateOrConnectWithoutSpbuInput)
  connectOrCreate?: Array<DeviceCreateOrConnectWithoutSpbuInput>

  @Field(() => [DeviceUpsertWithWhereUniqueWithoutSpbuInput], {
    nullable: true,
  })
  @Type(() => DeviceUpsertWithWhereUniqueWithoutSpbuInput)
  upsert?: Array<DeviceUpsertWithWhereUniqueWithoutSpbuInput>

  @Field(() => DeviceCreateManySpbuInputEnvelope, { nullable: true })
  @Type(() => DeviceCreateManySpbuInputEnvelope)
  createMany?: DeviceCreateManySpbuInputEnvelope

  @Field(() => [DeviceWhereUniqueInput], { nullable: true })
  @Type(() => DeviceWhereUniqueInput)
  set?: Array<Prisma.AtLeast<DeviceWhereUniqueInput, 'device_id'>>

  @Field(() => [DeviceWhereUniqueInput], { nullable: true })
  @Type(() => DeviceWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<DeviceWhereUniqueInput, 'device_id'>>

  @Field(() => [DeviceWhereUniqueInput], { nullable: true })
  @Type(() => DeviceWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<DeviceWhereUniqueInput, 'device_id'>>

  @Field(() => [DeviceWhereUniqueInput], { nullable: true })
  @Type(() => DeviceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<DeviceWhereUniqueInput, 'device_id'>>

  @Field(() => [DeviceUpdateWithWhereUniqueWithoutSpbuInput], {
    nullable: true,
  })
  @Type(() => DeviceUpdateWithWhereUniqueWithoutSpbuInput)
  update?: Array<DeviceUpdateWithWhereUniqueWithoutSpbuInput>

  @Field(() => [DeviceUpdateManyWithWhereWithoutSpbuInput], { nullable: true })
  @Type(() => DeviceUpdateManyWithWhereWithoutSpbuInput)
  updateMany?: Array<DeviceUpdateManyWithWhereWithoutSpbuInput>

  @Field(() => [DeviceScalarWhereInput], { nullable: true })
  @Type(() => DeviceScalarWhereInput)
  deleteMany?: Array<DeviceScalarWhereInput>
}

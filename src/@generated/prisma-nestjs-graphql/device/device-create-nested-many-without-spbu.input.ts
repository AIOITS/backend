import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { DeviceCreateWithoutSpbuInput } from './device-create-without-spbu.input'
import { Type } from 'class-transformer'
import { DeviceCreateOrConnectWithoutSpbuInput } from './device-create-or-connect-without-spbu.input'
import { DeviceCreateManySpbuInputEnvelope } from './device-create-many-spbu-input-envelope.input'
import { Prisma } from '@prisma/client'
import { DeviceWhereUniqueInput } from './device-where-unique.input'

@InputType()
export class DeviceCreateNestedManyWithoutSpbuInput {
  @Field(() => [DeviceCreateWithoutSpbuInput], { nullable: true })
  @Type(() => DeviceCreateWithoutSpbuInput)
  create?: Array<DeviceCreateWithoutSpbuInput>

  @Field(() => [DeviceCreateOrConnectWithoutSpbuInput], { nullable: true })
  @Type(() => DeviceCreateOrConnectWithoutSpbuInput)
  connectOrCreate?: Array<DeviceCreateOrConnectWithoutSpbuInput>

  @Field(() => DeviceCreateManySpbuInputEnvelope, { nullable: true })
  @Type(() => DeviceCreateManySpbuInputEnvelope)
  createMany?: DeviceCreateManySpbuInputEnvelope

  @Field(() => [DeviceWhereUniqueInput], { nullable: true })
  @Type(() => DeviceWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<DeviceWhereUniqueInput, 'device_id'>>
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DeviceWhereUniqueInput } from './device-where-unique.input'
import { Type } from 'class-transformer'
import { DeviceUpdateWithoutSpbuInput } from './device-update-without-spbu.input'
import { DeviceCreateWithoutSpbuInput } from './device-create-without-spbu.input'

@InputType()
export class DeviceUpsertWithWhereUniqueWithoutSpbuInput {
  @Field(() => DeviceWhereUniqueInput, { nullable: false })
  @Type(() => DeviceWhereUniqueInput)
  where!: Prisma.AtLeast<DeviceWhereUniqueInput, 'device_id'>

  @Field(() => DeviceUpdateWithoutSpbuInput, { nullable: false })
  @Type(() => DeviceUpdateWithoutSpbuInput)
  update!: DeviceUpdateWithoutSpbuInput

  @Field(() => DeviceCreateWithoutSpbuInput, { nullable: false })
  @Type(() => DeviceCreateWithoutSpbuInput)
  create!: DeviceCreateWithoutSpbuInput
}

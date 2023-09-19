import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { DeviceCreateWithoutHistoryPengisianInput } from './device-create-without-history-pengisian.input'
import { Type } from 'class-transformer'
import { DeviceCreateOrConnectWithoutHistoryPengisianInput } from './device-create-or-connect-without-history-pengisian.input'
import { Prisma } from '@prisma/client'
import { DeviceWhereUniqueInput } from './device-where-unique.input'

@InputType()
export class DeviceCreateNestedOneWithoutHistoryPengisianInput {
  @Field(() => DeviceCreateWithoutHistoryPengisianInput, { nullable: true })
  @Type(() => DeviceCreateWithoutHistoryPengisianInput)
  create?: DeviceCreateWithoutHistoryPengisianInput

  @Field(() => DeviceCreateOrConnectWithoutHistoryPengisianInput, {
    nullable: true,
  })
  @Type(() => DeviceCreateOrConnectWithoutHistoryPengisianInput)
  connectOrCreate?: DeviceCreateOrConnectWithoutHistoryPengisianInput

  @Field(() => DeviceWhereUniqueInput, { nullable: true })
  @Type(() => DeviceWhereUniqueInput)
  connect?: Prisma.AtLeast<DeviceWhereUniqueInput, 'device_id'>
}

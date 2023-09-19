import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SpbuCreateNestedOneWithoutDeviceInput } from '../spbu/spbu-create-nested-one-without-device.input'

@InputType()
export class DeviceCreateWithoutHistoryPengisianInput {
  @Field(() => String, { nullable: false })
  device_id!: string

  @Field(() => SpbuCreateNestedOneWithoutDeviceInput, { nullable: false })
  spbu!: SpbuCreateNestedOneWithoutDeviceInput
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { DeviceCreateNestedManyWithoutSpbuInput } from '../device/device-create-nested-many-without-spbu.input'

@InputType()
export class SpbuCreateWithoutHistoryPengisianInput {
  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  alamat!: string

  @Field(() => DeviceCreateNestedManyWithoutSpbuInput, { nullable: true })
  device?: DeviceCreateNestedManyWithoutSpbuInput
}

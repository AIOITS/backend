import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class DeviceCreateManySpbuInput {
  @Field(() => String, { nullable: false })
  device_id!: string
}

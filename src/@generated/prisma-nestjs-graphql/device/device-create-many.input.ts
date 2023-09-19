import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@InputType()
export class DeviceCreateManyInput {
  @Field(() => String, { nullable: false })
  device_id!: string

  @Field(() => Int, { nullable: false })
  spbu_id!: number
}

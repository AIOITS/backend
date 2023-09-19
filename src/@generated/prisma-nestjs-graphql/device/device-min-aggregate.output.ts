import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class DeviceMinAggregate {
  @Field(() => String, { nullable: true })
  device_id?: string

  @Field(() => Int, { nullable: true })
  spbu_id?: number
}

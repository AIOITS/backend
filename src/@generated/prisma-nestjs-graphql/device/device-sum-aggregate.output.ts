import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class DeviceSumAggregate {
  @Field(() => Int, { nullable: true })
  spbu_id?: number
}

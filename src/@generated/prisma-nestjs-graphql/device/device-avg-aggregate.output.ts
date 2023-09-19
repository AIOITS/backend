import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'

@ObjectType()
export class DeviceAvgAggregate {
  @Field(() => Float, { nullable: true })
  spbu_id?: number
}

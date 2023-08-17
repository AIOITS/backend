import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class SimSumAggregate {
  @Field(() => Int, { nullable: true })
  rt?: number

  @Field(() => Int, { nullable: true })
  rw?: number

  @Field(() => Int, { nullable: true })
  userId?: number
}

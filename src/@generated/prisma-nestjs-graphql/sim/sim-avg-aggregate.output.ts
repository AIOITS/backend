import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'

@ObjectType()
export class SIMAvgAggregate {
  @Field(() => Float, { nullable: true })
  rt?: number

  @Field(() => Float, { nullable: true })
  rw?: number

  @Field(() => Float, { nullable: true })
  userId?: number
}

import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class BbmCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number

  @Field(() => Int, { nullable: false })
  name!: number

  @Field(() => Int, { nullable: false })
  type!: number

  @Field(() => Int, { nullable: false })
  price_per_liter!: number

  @Field(() => Int, { nullable: false })
  _all!: number
}

import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'

@ObjectType()
export class HistoryPengisianSumAggregate {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => Int, { nullable: true })
  spbu_id?: number

  @Field(() => Float, { nullable: true })
  jumlah?: number

  @Field(() => Int, { nullable: true })
  user_id?: number
}

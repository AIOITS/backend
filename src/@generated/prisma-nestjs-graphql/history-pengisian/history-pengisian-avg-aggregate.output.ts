import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'

@ObjectType()
export class HistoryPengisianAvgAggregate {
  @Field(() => Float, { nullable: true })
  jumlah?: number

  @Field(() => Float, { nullable: true })
  user_id?: number
}
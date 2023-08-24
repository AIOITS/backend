import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'

@ObjectType()
export class History_pengisianAvgAggregate {
  @Field(() => Float, { nullable: true })
  jumlah?: number
}

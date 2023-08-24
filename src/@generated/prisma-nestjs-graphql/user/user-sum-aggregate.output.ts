import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'

@ObjectType()
export class UserSumAggregate {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => Float, { nullable: true })
  kuota_subsidi?: number

  @Field(() => Int, { nullable: true })
  saldo?: number

  @Field(() => Int, { nullable: true })
  role?: number
}

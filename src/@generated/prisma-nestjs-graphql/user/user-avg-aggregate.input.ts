import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class UserAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true

  @Field(() => Boolean, { nullable: true })
  kuota_subsidi?: true

  @Field(() => Boolean, { nullable: true })
  saldo?: true

  @Field(() => Boolean, { nullable: true })
  role?: true
}

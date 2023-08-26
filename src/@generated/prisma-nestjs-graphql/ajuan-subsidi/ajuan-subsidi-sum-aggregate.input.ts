import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class AjuanSubsidiSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true

  @Field(() => Boolean, { nullable: true })
  jumlah?: true

  @Field(() => Boolean, { nullable: true })
  userId?: true
}

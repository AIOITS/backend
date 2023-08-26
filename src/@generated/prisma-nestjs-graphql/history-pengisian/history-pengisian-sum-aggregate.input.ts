import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class HistoryPengisianSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  jumlah?: true

  @Field(() => Boolean, { nullable: true })
  user_id?: true
}

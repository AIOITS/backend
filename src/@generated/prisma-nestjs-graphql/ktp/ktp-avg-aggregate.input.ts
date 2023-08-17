import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class KtpAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  rt?: true

  @Field(() => Boolean, { nullable: true })
  rw?: true
}

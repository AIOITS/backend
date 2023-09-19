import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class FileCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true

  @Field(() => Boolean, { nullable: true })
  name?: true

  @Field(() => Boolean, { nullable: true })
  url?: true

  @Field(() => Boolean, { nullable: true })
  ajuanSubsidi_id?: true

  @Field(() => Boolean, { nullable: true })
  _all?: true
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class DeviceMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  device_id?: true

  @Field(() => Boolean, { nullable: true })
  spbu_id?: true
}

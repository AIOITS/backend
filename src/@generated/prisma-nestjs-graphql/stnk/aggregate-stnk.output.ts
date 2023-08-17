import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { StnkCountAggregate } from './stnk-count-aggregate.output'
import { StnkMinAggregate } from './stnk-min-aggregate.output'
import { StnkMaxAggregate } from './stnk-max-aggregate.output'

@ObjectType()
export class AggregateStnk {
  @Field(() => StnkCountAggregate, { nullable: true })
  _count?: StnkCountAggregate

  @Field(() => StnkMinAggregate, { nullable: true })
  _min?: StnkMinAggregate

  @Field(() => StnkMaxAggregate, { nullable: true })
  _max?: StnkMaxAggregate
}

import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { History_pengisianCountAggregate } from './history-pengisian-count-aggregate.output'
import { History_pengisianAvgAggregate } from './history-pengisian-avg-aggregate.output'
import { History_pengisianSumAggregate } from './history-pengisian-sum-aggregate.output'
import { History_pengisianMinAggregate } from './history-pengisian-min-aggregate.output'
import { History_pengisianMaxAggregate } from './history-pengisian-max-aggregate.output'

@ObjectType()
export class AggregateHistory_pengisian {
  @Field(() => History_pengisianCountAggregate, { nullable: true })
  _count?: History_pengisianCountAggregate

  @Field(() => History_pengisianAvgAggregate, { nullable: true })
  _avg?: History_pengisianAvgAggregate

  @Field(() => History_pengisianSumAggregate, { nullable: true })
  _sum?: History_pengisianSumAggregate

  @Field(() => History_pengisianMinAggregate, { nullable: true })
  _min?: History_pengisianMinAggregate

  @Field(() => History_pengisianMaxAggregate, { nullable: true })
  _max?: History_pengisianMaxAggregate
}

import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { HistoryPengisianCountAggregate } from './history-pengisian-count-aggregate.output'
import { HistoryPengisianAvgAggregate } from './history-pengisian-avg-aggregate.output'
import { HistoryPengisianSumAggregate } from './history-pengisian-sum-aggregate.output'
import { HistoryPengisianMinAggregate } from './history-pengisian-min-aggregate.output'
import { HistoryPengisianMaxAggregate } from './history-pengisian-max-aggregate.output'

@ObjectType()
export class AggregateHistoryPengisian {
  @Field(() => HistoryPengisianCountAggregate, { nullable: true })
  _count?: HistoryPengisianCountAggregate

  @Field(() => HistoryPengisianAvgAggregate, { nullable: true })
  _avg?: HistoryPengisianAvgAggregate

  @Field(() => HistoryPengisianSumAggregate, { nullable: true })
  _sum?: HistoryPengisianSumAggregate

  @Field(() => HistoryPengisianMinAggregate, { nullable: true })
  _min?: HistoryPengisianMinAggregate

  @Field(() => HistoryPengisianMaxAggregate, { nullable: true })
  _max?: HistoryPengisianMaxAggregate
}

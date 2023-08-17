import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { PkbCountAggregate } from './pkb-count-aggregate.output'
import { PkbAvgAggregate } from './pkb-avg-aggregate.output'
import { PkbSumAggregate } from './pkb-sum-aggregate.output'
import { PkbMinAggregate } from './pkb-min-aggregate.output'
import { PkbMaxAggregate } from './pkb-max-aggregate.output'

@ObjectType()
export class AggregatePkb {
  @Field(() => PkbCountAggregate, { nullable: true })
  _count?: PkbCountAggregate

  @Field(() => PkbAvgAggregate, { nullable: true })
  _avg?: PkbAvgAggregate

  @Field(() => PkbSumAggregate, { nullable: true })
  _sum?: PkbSumAggregate

  @Field(() => PkbMinAggregate, { nullable: true })
  _min?: PkbMinAggregate

  @Field(() => PkbMaxAggregate, { nullable: true })
  _max?: PkbMaxAggregate
}

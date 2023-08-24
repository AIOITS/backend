import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Ajuan_subsidiCountAggregate } from './ajuan-subsidi-count-aggregate.output'
import { Ajuan_subsidiAvgAggregate } from './ajuan-subsidi-avg-aggregate.output'
import { Ajuan_subsidiSumAggregate } from './ajuan-subsidi-sum-aggregate.output'
import { Ajuan_subsidiMinAggregate } from './ajuan-subsidi-min-aggregate.output'
import { Ajuan_subsidiMaxAggregate } from './ajuan-subsidi-max-aggregate.output'

@ObjectType()
export class AggregateAjuan_subsidi {
  @Field(() => Ajuan_subsidiCountAggregate, { nullable: true })
  _count?: Ajuan_subsidiCountAggregate

  @Field(() => Ajuan_subsidiAvgAggregate, { nullable: true })
  _avg?: Ajuan_subsidiAvgAggregate

  @Field(() => Ajuan_subsidiSumAggregate, { nullable: true })
  _sum?: Ajuan_subsidiSumAggregate

  @Field(() => Ajuan_subsidiMinAggregate, { nullable: true })
  _min?: Ajuan_subsidiMinAggregate

  @Field(() => Ajuan_subsidiMaxAggregate, { nullable: true })
  _max?: Ajuan_subsidiMaxAggregate
}

import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { SpbuCountAggregate } from './spbu-count-aggregate.output'
import { SpbuAvgAggregate } from './spbu-avg-aggregate.output'
import { SpbuSumAggregate } from './spbu-sum-aggregate.output'
import { SpbuMinAggregate } from './spbu-min-aggregate.output'
import { SpbuMaxAggregate } from './spbu-max-aggregate.output'

@ObjectType()
export class SpbuGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  alamat!: string

  @Field(() => SpbuCountAggregate, { nullable: true })
  _count?: SpbuCountAggregate

  @Field(() => SpbuAvgAggregate, { nullable: true })
  _avg?: SpbuAvgAggregate

  @Field(() => SpbuSumAggregate, { nullable: true })
  _sum?: SpbuSumAggregate

  @Field(() => SpbuMinAggregate, { nullable: true })
  _min?: SpbuMinAggregate

  @Field(() => SpbuMaxAggregate, { nullable: true })
  _max?: SpbuMaxAggregate
}

import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PkbWhereInput } from './pkb-where.input'
import { Type } from 'class-transformer'
import { PkbOrderByWithAggregationInput } from './pkb-order-by-with-aggregation.input'
import { PkbScalarFieldEnum } from './pkb-scalar-field.enum'
import { PkbScalarWhereWithAggregatesInput } from './pkb-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { PkbCountAggregateInput } from './pkb-count-aggregate.input'
import { PkbAvgAggregateInput } from './pkb-avg-aggregate.input'
import { PkbSumAggregateInput } from './pkb-sum-aggregate.input'
import { PkbMinAggregateInput } from './pkb-min-aggregate.input'
import { PkbMaxAggregateInput } from './pkb-max-aggregate.input'

@ArgsType()
export class PkbGroupByArgs {
  @Field(() => PkbWhereInput, { nullable: true })
  @Type(() => PkbWhereInput)
  where?: PkbWhereInput

  @Field(() => [PkbOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<PkbOrderByWithAggregationInput>

  @Field(() => [PkbScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof PkbScalarFieldEnum>

  @Field(() => PkbScalarWhereWithAggregatesInput, { nullable: true })
  having?: PkbScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => PkbCountAggregateInput, { nullable: true })
  _count?: PkbCountAggregateInput

  @Field(() => PkbAvgAggregateInput, { nullable: true })
  _avg?: PkbAvgAggregateInput

  @Field(() => PkbSumAggregateInput, { nullable: true })
  _sum?: PkbSumAggregateInput

  @Field(() => PkbMinAggregateInput, { nullable: true })
  _min?: PkbMinAggregateInput

  @Field(() => PkbMaxAggregateInput, { nullable: true })
  _max?: PkbMaxAggregateInput
}

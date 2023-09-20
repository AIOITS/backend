import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { BbmWhereInput } from './bbm-where.input'
import { Type } from 'class-transformer'
import { BbmOrderByWithAggregationInput } from './bbm-order-by-with-aggregation.input'
import { BbmScalarFieldEnum } from './bbm-scalar-field.enum'
import { BbmScalarWhereWithAggregatesInput } from './bbm-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { BbmCountAggregateInput } from './bbm-count-aggregate.input'
import { BbmAvgAggregateInput } from './bbm-avg-aggregate.input'
import { BbmSumAggregateInput } from './bbm-sum-aggregate.input'
import { BbmMinAggregateInput } from './bbm-min-aggregate.input'
import { BbmMaxAggregateInput } from './bbm-max-aggregate.input'

@ArgsType()
export class BbmGroupByArgs {
  @Field(() => BbmWhereInput, { nullable: true })
  @Type(() => BbmWhereInput)
  where?: BbmWhereInput

  @Field(() => [BbmOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<BbmOrderByWithAggregationInput>

  @Field(() => [BbmScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof BbmScalarFieldEnum>

  @Field(() => BbmScalarWhereWithAggregatesInput, { nullable: true })
  having?: BbmScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => BbmCountAggregateInput, { nullable: true })
  _count?: BbmCountAggregateInput

  @Field(() => BbmAvgAggregateInput, { nullable: true })
  _avg?: BbmAvgAggregateInput

  @Field(() => BbmSumAggregateInput, { nullable: true })
  _sum?: BbmSumAggregateInput

  @Field(() => BbmMinAggregateInput, { nullable: true })
  _min?: BbmMinAggregateInput

  @Field(() => BbmMaxAggregateInput, { nullable: true })
  _max?: BbmMaxAggregateInput
}

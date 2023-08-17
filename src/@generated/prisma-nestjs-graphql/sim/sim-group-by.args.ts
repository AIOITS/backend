import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SimWhereInput } from './sim-where.input'
import { Type } from 'class-transformer'
import { SimOrderByWithAggregationInput } from './sim-order-by-with-aggregation.input'
import { SimScalarFieldEnum } from './sim-scalar-field.enum'
import { SimScalarWhereWithAggregatesInput } from './sim-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { SimCountAggregateInput } from './sim-count-aggregate.input'
import { SimAvgAggregateInput } from './sim-avg-aggregate.input'
import { SimSumAggregateInput } from './sim-sum-aggregate.input'
import { SimMinAggregateInput } from './sim-min-aggregate.input'
import { SimMaxAggregateInput } from './sim-max-aggregate.input'

@ArgsType()
export class SimGroupByArgs {
  @Field(() => SimWhereInput, { nullable: true })
  @Type(() => SimWhereInput)
  where?: SimWhereInput

  @Field(() => [SimOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<SimOrderByWithAggregationInput>

  @Field(() => [SimScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof SimScalarFieldEnum>

  @Field(() => SimScalarWhereWithAggregatesInput, { nullable: true })
  having?: SimScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => SimCountAggregateInput, { nullable: true })
  _count?: SimCountAggregateInput

  @Field(() => SimAvgAggregateInput, { nullable: true })
  _avg?: SimAvgAggregateInput

  @Field(() => SimSumAggregateInput, { nullable: true })
  _sum?: SimSumAggregateInput

  @Field(() => SimMinAggregateInput, { nullable: true })
  _min?: SimMinAggregateInput

  @Field(() => SimMaxAggregateInput, { nullable: true })
  _max?: SimMaxAggregateInput
}

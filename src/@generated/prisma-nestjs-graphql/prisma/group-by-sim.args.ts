import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SIMWhereInput } from '../sim/sim-where.input'
import { Type } from 'class-transformer'
import { SIMOrderByWithAggregationInput } from '../sim/sim-order-by-with-aggregation.input'
import { SIMScalarFieldEnum } from '../sim/sim-scalar-field.enum'
import { SIMScalarWhereWithAggregatesInput } from '../sim/sim-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'

@ArgsType()
export class GroupBySimArgs {
  @Field(() => SIMWhereInput, { nullable: true })
  @Type(() => SIMWhereInput)
  where?: SIMWhereInput

  @Field(() => [SIMOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<SIMOrderByWithAggregationInput>

  @Field(() => [SIMScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof SIMScalarFieldEnum>

  @Field(() => SIMScalarWhereWithAggregatesInput, { nullable: true })
  having?: SIMScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number
}

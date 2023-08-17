import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { StnkWhereInput } from './stnk-where.input'
import { Type } from 'class-transformer'
import { StnkOrderByWithAggregationInput } from './stnk-order-by-with-aggregation.input'
import { StnkScalarFieldEnum } from './stnk-scalar-field.enum'
import { StnkScalarWhereWithAggregatesInput } from './stnk-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { StnkCountAggregateInput } from './stnk-count-aggregate.input'
import { StnkMinAggregateInput } from './stnk-min-aggregate.input'
import { StnkMaxAggregateInput } from './stnk-max-aggregate.input'

@ArgsType()
export class StnkGroupByArgs {
  @Field(() => StnkWhereInput, { nullable: true })
  @Type(() => StnkWhereInput)
  where?: StnkWhereInput

  @Field(() => [StnkOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<StnkOrderByWithAggregationInput>

  @Field(() => [StnkScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof StnkScalarFieldEnum>

  @Field(() => StnkScalarWhereWithAggregatesInput, { nullable: true })
  having?: StnkScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => StnkCountAggregateInput, { nullable: true })
  _count?: StnkCountAggregateInput

  @Field(() => StnkMinAggregateInput, { nullable: true })
  _min?: StnkMinAggregateInput

  @Field(() => StnkMaxAggregateInput, { nullable: true })
  _max?: StnkMaxAggregateInput
}

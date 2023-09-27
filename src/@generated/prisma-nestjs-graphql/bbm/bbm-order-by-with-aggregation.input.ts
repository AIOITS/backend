import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { BbmCountOrderByAggregateInput } from './bbm-count-order-by-aggregate.input'
import { BbmAvgOrderByAggregateInput } from './bbm-avg-order-by-aggregate.input'
import { BbmMaxOrderByAggregateInput } from './bbm-max-order-by-aggregate.input'
import { BbmMinOrderByAggregateInput } from './bbm-min-order-by-aggregate.input'
import { BbmSumOrderByAggregateInput } from './bbm-sum-order-by-aggregate.input'

@InputType()
export class BbmOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  price_per_liter?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  is_subsidi?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  category?: keyof typeof SortOrder

  @Field(() => BbmCountOrderByAggregateInput, { nullable: true })
  _count?: BbmCountOrderByAggregateInput

  @Field(() => BbmAvgOrderByAggregateInput, { nullable: true })
  _avg?: BbmAvgOrderByAggregateInput

  @Field(() => BbmMaxOrderByAggregateInput, { nullable: true })
  _max?: BbmMaxOrderByAggregateInput

  @Field(() => BbmMinOrderByAggregateInput, { nullable: true })
  _min?: BbmMinOrderByAggregateInput

  @Field(() => BbmSumOrderByAggregateInput, { nullable: true })
  _sum?: BbmSumOrderByAggregateInput
}

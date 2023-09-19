import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { SpbuCountOrderByAggregateInput } from './spbu-count-order-by-aggregate.input'
import { SpbuAvgOrderByAggregateInput } from './spbu-avg-order-by-aggregate.input'
import { SpbuMaxOrderByAggregateInput } from './spbu-max-order-by-aggregate.input'
import { SpbuMinOrderByAggregateInput } from './spbu-min-order-by-aggregate.input'
import { SpbuSumOrderByAggregateInput } from './spbu-sum-order-by-aggregate.input'

@InputType()
export class SpbuOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  alamat?: keyof typeof SortOrder

  @Field(() => SpbuCountOrderByAggregateInput, { nullable: true })
  _count?: SpbuCountOrderByAggregateInput

  @Field(() => SpbuAvgOrderByAggregateInput, { nullable: true })
  _avg?: SpbuAvgOrderByAggregateInput

  @Field(() => SpbuMaxOrderByAggregateInput, { nullable: true })
  _max?: SpbuMaxOrderByAggregateInput

  @Field(() => SpbuMinOrderByAggregateInput, { nullable: true })
  _min?: SpbuMinOrderByAggregateInput

  @Field(() => SpbuSumOrderByAggregateInput, { nullable: true })
  _sum?: SpbuSumOrderByAggregateInput
}

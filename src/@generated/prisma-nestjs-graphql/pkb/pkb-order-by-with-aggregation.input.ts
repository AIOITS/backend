import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { PKBCountOrderByAggregateInput } from './pkb-count-order-by-aggregate.input'
import { PKBAvgOrderByAggregateInput } from './pkb-avg-order-by-aggregate.input'
import { PKBMaxOrderByAggregateInput } from './pkb-max-order-by-aggregate.input'
import { PKBMinOrderByAggregateInput } from './pkb-min-order-by-aggregate.input'
import { PKBSumOrderByAggregateInput } from './pkb-sum-order-by-aggregate.input'

@InputType()
export class PKBOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  nomor_PKB?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  status_pajak?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  bbknb_pokok?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  bbknb_sanksi?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  PKB_pokok?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  PKB_sanksi?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  swdkllj_pokok?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  swdkllj_sanksi?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  administrasi_stnk_pokok?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  administrasi_stnk_sanksi?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  administrasi_tnkb_pokok?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  administrasi_tnkb_sanksi?: keyof typeof SortOrder

  @Field(() => PKBCountOrderByAggregateInput, { nullable: true })
  _count?: PKBCountOrderByAggregateInput

  @Field(() => PKBAvgOrderByAggregateInput, { nullable: true })
  _avg?: PKBAvgOrderByAggregateInput

  @Field(() => PKBMaxOrderByAggregateInput, { nullable: true })
  _max?: PKBMaxOrderByAggregateInput

  @Field(() => PKBMinOrderByAggregateInput, { nullable: true })
  _min?: PKBMinOrderByAggregateInput

  @Field(() => PKBSumOrderByAggregateInput, { nullable: true })
  _sum?: PKBSumOrderByAggregateInput
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { HistoryPengisianCountOrderByAggregateInput } from './history-pengisian-count-order-by-aggregate.input'
import { HistoryPengisianAvgOrderByAggregateInput } from './history-pengisian-avg-order-by-aggregate.input'
import { HistoryPengisianMaxOrderByAggregateInput } from './history-pengisian-max-order-by-aggregate.input'
import { HistoryPengisianMinOrderByAggregateInput } from './history-pengisian-min-order-by-aggregate.input'
import { HistoryPengisianSumOrderByAggregateInput } from './history-pengisian-sum-order-by-aggregate.input'

@InputType()
export class HistoryPengisianOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  kategori_pengisian?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  nama_spbu?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  jumlah?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  user_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  nomor_stnk?: keyof typeof SortOrder

  @Field(() => HistoryPengisianCountOrderByAggregateInput, { nullable: true })
  _count?: HistoryPengisianCountOrderByAggregateInput

  @Field(() => HistoryPengisianAvgOrderByAggregateInput, { nullable: true })
  _avg?: HistoryPengisianAvgOrderByAggregateInput

  @Field(() => HistoryPengisianMaxOrderByAggregateInput, { nullable: true })
  _max?: HistoryPengisianMaxOrderByAggregateInput

  @Field(() => HistoryPengisianMinOrderByAggregateInput, { nullable: true })
  _min?: HistoryPengisianMinOrderByAggregateInput

  @Field(() => HistoryPengisianSumOrderByAggregateInput, { nullable: true })
  _sum?: HistoryPengisianSumOrderByAggregateInput
}

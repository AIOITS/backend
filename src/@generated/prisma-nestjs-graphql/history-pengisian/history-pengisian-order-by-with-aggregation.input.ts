import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { history_pengisianCountOrderByAggregateInput } from './history-pengisian-count-order-by-aggregate.input'
import { history_pengisianAvgOrderByAggregateInput } from './history-pengisian-avg-order-by-aggregate.input'
import { history_pengisianMaxOrderByAggregateInput } from './history-pengisian-max-order-by-aggregate.input'
import { history_pengisianMinOrderByAggregateInput } from './history-pengisian-min-order-by-aggregate.input'
import { history_pengisianSumOrderByAggregateInput } from './history-pengisian-sum-order-by-aggregate.input'

@InputType()
export class history_pengisianOrderByWithAggregationInput {
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
  nomor_stnk?: keyof typeof SortOrder

  @Field(() => history_pengisianCountOrderByAggregateInput, { nullable: true })
  _count?: history_pengisianCountOrderByAggregateInput

  @Field(() => history_pengisianAvgOrderByAggregateInput, { nullable: true })
  _avg?: history_pengisianAvgOrderByAggregateInput

  @Field(() => history_pengisianMaxOrderByAggregateInput, { nullable: true })
  _max?: history_pengisianMaxOrderByAggregateInput

  @Field(() => history_pengisianMinOrderByAggregateInput, { nullable: true })
  _min?: history_pengisianMinOrderByAggregateInput

  @Field(() => history_pengisianSumOrderByAggregateInput, { nullable: true })
  _sum?: history_pengisianSumOrderByAggregateInput
}

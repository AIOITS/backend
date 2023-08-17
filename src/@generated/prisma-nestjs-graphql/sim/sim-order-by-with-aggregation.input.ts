import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { SortOrderInput } from '../prisma/sort-order.input'
import { SIMCountOrderByAggregateInput } from './sim-count-order-by-aggregate.input'
import { SIMAvgOrderByAggregateInput } from './sim-avg-order-by-aggregate.input'
import { SIMMaxOrderByAggregateInput } from './sim-max-order-by-aggregate.input'
import { SIMMinOrderByAggregateInput } from './sim-min-order-by-aggregate.input'
import { SIMSumOrderByAggregateInput } from './sim-sum-order-by-aggregate.input'

@InputType()
export class SIMOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  nomor_sim?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  nama?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  alamat?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  rt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  rw?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  kelurahan_desa?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  kecamatan?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  kabupaten?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  pekerjaan?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  kabupaten_terbit?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  tanggal_terbit?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  penerbit?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  berlaku_sampai?: keyof typeof SortOrder

  @Field(() => SortOrderInput, { nullable: true })
  userId?: SortOrderInput

  @Field(() => SIMCountOrderByAggregateInput, { nullable: true })
  _count?: SIMCountOrderByAggregateInput

  @Field(() => SIMAvgOrderByAggregateInput, { nullable: true })
  _avg?: SIMAvgOrderByAggregateInput

  @Field(() => SIMMaxOrderByAggregateInput, { nullable: true })
  _max?: SIMMaxOrderByAggregateInput

  @Field(() => SIMMinOrderByAggregateInput, { nullable: true })
  _min?: SIMMinOrderByAggregateInput

  @Field(() => SIMSumOrderByAggregateInput, { nullable: true })
  _sum?: SIMSumOrderByAggregateInput
}

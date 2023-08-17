import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { SortOrderInput } from '../prisma/sort-order.input'
import { SimCountOrderByAggregateInput } from './sim-count-order-by-aggregate.input'
import { SimAvgOrderByAggregateInput } from './sim-avg-order-by-aggregate.input'
import { SimMaxOrderByAggregateInput } from './sim-max-order-by-aggregate.input'
import { SimMinOrderByAggregateInput } from './sim-min-order-by-aggregate.input'
import { SimSumOrderByAggregateInput } from './sim-sum-order-by-aggregate.input'

@InputType()
export class SimOrderByWithAggregationInput {
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

  @Field(() => SimCountOrderByAggregateInput, { nullable: true })
  _count?: SimCountOrderByAggregateInput

  @Field(() => SimAvgOrderByAggregateInput, { nullable: true })
  _avg?: SimAvgOrderByAggregateInput

  @Field(() => SimMaxOrderByAggregateInput, { nullable: true })
  _max?: SimMaxOrderByAggregateInput

  @Field(() => SimMinOrderByAggregateInput, { nullable: true })
  _min?: SimMinOrderByAggregateInput

  @Field(() => SimSumOrderByAggregateInput, { nullable: true })
  _sum?: SimSumOrderByAggregateInput
}

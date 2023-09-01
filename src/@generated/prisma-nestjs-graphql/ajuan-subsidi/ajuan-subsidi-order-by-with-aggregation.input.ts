import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { SortOrderInput } from '../prisma/sort-order.input'
import { AjuanSubsidiCountOrderByAggregateInput } from './ajuan-subsidi-count-order-by-aggregate.input'
import { AjuanSubsidiAvgOrderByAggregateInput } from './ajuan-subsidi-avg-order-by-aggregate.input'
import { AjuanSubsidiMaxOrderByAggregateInput } from './ajuan-subsidi-max-order-by-aggregate.input'
import { AjuanSubsidiMinOrderByAggregateInput } from './ajuan-subsidi-min-order-by-aggregate.input'
import { AjuanSubsidiSumOrderByAggregateInput } from './ajuan-subsidi-sum-order-by-aggregate.input'

@InputType()
export class AjuanSubsidiOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  jumlah?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  alasan?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  dokumen_pendukung?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  tanggal_pengajuan?: keyof typeof SortOrder

  @Field(() => SortOrderInput, { nullable: true })
  status_pengajuan?: SortOrderInput

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => SortOrderInput, { nullable: true })
  userId?: SortOrderInput

  @Field(() => AjuanSubsidiCountOrderByAggregateInput, { nullable: true })
  _count?: AjuanSubsidiCountOrderByAggregateInput

  @Field(() => AjuanSubsidiAvgOrderByAggregateInput, { nullable: true })
  _avg?: AjuanSubsidiAvgOrderByAggregateInput

  @Field(() => AjuanSubsidiMaxOrderByAggregateInput, { nullable: true })
  _max?: AjuanSubsidiMaxOrderByAggregateInput

  @Field(() => AjuanSubsidiMinOrderByAggregateInput, { nullable: true })
  _min?: AjuanSubsidiMinOrderByAggregateInput

  @Field(() => AjuanSubsidiSumOrderByAggregateInput, { nullable: true })
  _sum?: AjuanSubsidiSumOrderByAggregateInput
}

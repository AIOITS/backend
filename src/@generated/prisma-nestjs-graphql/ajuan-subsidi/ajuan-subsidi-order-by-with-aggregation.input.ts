import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { ajuan_subsidiCountOrderByAggregateInput } from './ajuan-subsidi-count-order-by-aggregate.input'
import { ajuan_subsidiAvgOrderByAggregateInput } from './ajuan-subsidi-avg-order-by-aggregate.input'
import { ajuan_subsidiMaxOrderByAggregateInput } from './ajuan-subsidi-max-order-by-aggregate.input'
import { ajuan_subsidiMinOrderByAggregateInput } from './ajuan-subsidi-min-order-by-aggregate.input'
import { ajuan_subsidiSumOrderByAggregateInput } from './ajuan-subsidi-sum-order-by-aggregate.input'

@InputType()
export class ajuan_subsidiOrderByWithAggregationInput {
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

  @Field(() => SortOrder, { nullable: true })
  status_pengajuan?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => ajuan_subsidiCountOrderByAggregateInput, { nullable: true })
  _count?: ajuan_subsidiCountOrderByAggregateInput

  @Field(() => ajuan_subsidiAvgOrderByAggregateInput, { nullable: true })
  _avg?: ajuan_subsidiAvgOrderByAggregateInput

  @Field(() => ajuan_subsidiMaxOrderByAggregateInput, { nullable: true })
  _max?: ajuan_subsidiMaxOrderByAggregateInput

  @Field(() => ajuan_subsidiMinOrderByAggregateInput, { nullable: true })
  _min?: ajuan_subsidiMinOrderByAggregateInput

  @Field(() => ajuan_subsidiSumOrderByAggregateInput, { nullable: true })
  _sum?: ajuan_subsidiSumOrderByAggregateInput
}

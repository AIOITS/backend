import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class HistoryPengisianMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  kategori_pengisian?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  device_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  jenis_kendaraan?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  spbu_id?: keyof typeof SortOrder

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
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class history_pengisianMaxOrderByAggregateInput {
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
}

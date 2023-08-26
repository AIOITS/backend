import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input'
import { StnkOrderByWithRelationInput } from '../stnk/stnk-order-by-with-relation.input'

@InputType()
export class HistoryPengisianOrderByWithRelationInput {
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

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput

  @Field(() => StnkOrderByWithRelationInput, { nullable: true })
  stnk?: StnkOrderByWithRelationInput
}

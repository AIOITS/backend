import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { SortOrderInput } from '../prisma/sort-order.input'
import { FileOrderByRelationAggregateInput } from '../file/file-order-by-relation-aggregate.input'
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input'

@InputType()
export class AjuanSubsidiOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  jumlah?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  alasan?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  tanggal_pengajuan?: keyof typeof SortOrder

  @Field(() => SortOrderInput, { nullable: true })
  status_pengajuan?: SortOrderInput

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => SortOrderInput, { nullable: true })
  user_id?: SortOrderInput

  @Field(() => FileOrderByRelationAggregateInput, { nullable: true })
  dokumen_pendukung?: FileOrderByRelationAggregateInput

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput
}

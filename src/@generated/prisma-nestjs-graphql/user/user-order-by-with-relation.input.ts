import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { SortOrderInput } from '../prisma/sort-order.input'
import { HistoryPengisianOrderByRelationAggregateInput } from '../history-pengisian/history-pengisian-order-by-relation-aggregate.input'
import { AjuanSubsidiOrderByRelationAggregateInput } from '../ajuan-subsidi/ajuan-subsidi-order-by-relation-aggregate.input'
import { KtpOrderByWithRelationInput } from '../ktp/ktp-order-by-with-relation.input'

@InputType()
export class UserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  nik?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrderInput, { nullable: true })
  email?: SortOrderInput

  @Field(() => SortOrderInput, { nullable: true })
  phone?: SortOrderInput

  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  kuota_subsidi?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  saldo?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => HistoryPengisianOrderByRelationAggregateInput, {
    nullable: true,
  })
  history_pengisian?: HistoryPengisianOrderByRelationAggregateInput

  @Field(() => AjuanSubsidiOrderByRelationAggregateInput, { nullable: true })
  ajuan_subsidi?: AjuanSubsidiOrderByRelationAggregateInput

  @Field(() => KtpOrderByWithRelationInput, { nullable: true })
  ktp?: KtpOrderByWithRelationInput
}

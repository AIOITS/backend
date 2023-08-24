import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class history_pengisianSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  jumlah?: keyof typeof SortOrder
}

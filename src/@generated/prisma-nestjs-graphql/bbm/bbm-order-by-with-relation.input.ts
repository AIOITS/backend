import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { HistoryPengisianOrderByRelationAggregateInput } from '../history-pengisian/history-pengisian-order-by-relation-aggregate.input'

@InputType()
export class BbmOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  price_per_liter?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  is_subsidi?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  category?: keyof typeof SortOrder

  @Field(() => HistoryPengisianOrderByRelationAggregateInput, {
    nullable: true,
  })
  HistoryPengisian?: HistoryPengisianOrderByRelationAggregateInput
}

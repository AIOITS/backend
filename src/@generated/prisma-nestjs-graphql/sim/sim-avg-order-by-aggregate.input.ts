import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class SimAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  rt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  rw?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder
}

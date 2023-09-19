import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { DeviceOrderByRelationAggregateInput } from '../device/device-order-by-relation-aggregate.input'
import { HistoryPengisianOrderByRelationAggregateInput } from '../history-pengisian/history-pengisian-order-by-relation-aggregate.input'

@InputType()
export class SpbuOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  alamat?: keyof typeof SortOrder

  @Field(() => DeviceOrderByRelationAggregateInput, { nullable: true })
  device?: DeviceOrderByRelationAggregateInput

  @Field(() => HistoryPengisianOrderByRelationAggregateInput, {
    nullable: true,
  })
  historyPengisian?: HistoryPengisianOrderByRelationAggregateInput
}

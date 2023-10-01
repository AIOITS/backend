import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SpbuOrderByWithRelationInput } from '../spbu/spbu-order-by-with-relation.input';
import { HistoryPengisianOrderByRelationAggregateInput } from '../history-pengisian/history-pengisian-order-by-relation-aggregate.input';

@InputType()
export class DeviceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    device_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    spbu_id?: keyof typeof SortOrder;

    @Field(() => SpbuOrderByWithRelationInput, {nullable:true})
    spbu?: SpbuOrderByWithRelationInput;

    @Field(() => HistoryPengisianOrderByRelationAggregateInput, {nullable:true})
    historyPengisian?: HistoryPengisianOrderByRelationAggregateInput;
}

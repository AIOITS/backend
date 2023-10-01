import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class HistoryPengisianAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    spbu_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jumlah?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bbm_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;
}

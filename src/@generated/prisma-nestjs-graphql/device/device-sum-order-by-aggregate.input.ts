import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DeviceSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    spbu_id?: keyof typeof SortOrder;
}

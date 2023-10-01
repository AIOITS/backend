import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class KtpSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    rt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rw?: keyof typeof SortOrder;
}

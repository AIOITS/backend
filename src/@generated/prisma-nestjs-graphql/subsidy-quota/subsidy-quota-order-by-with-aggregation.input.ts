import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SubsidyQuotaCountOrderByAggregateInput } from './subsidy-quota-count-order-by-aggregate.input';
import { SubsidyQuotaAvgOrderByAggregateInput } from './subsidy-quota-avg-order-by-aggregate.input';
import { SubsidyQuotaMaxOrderByAggregateInput } from './subsidy-quota-max-order-by-aggregate.input';
import { SubsidyQuotaMinOrderByAggregateInput } from './subsidy-quota-min-order-by-aggregate.input';
import { SubsidyQuotaSumOrderByAggregateInput } from './subsidy-quota-sum-order-by-aggregate.input';

@InputType()
export class SubsidyQuotaOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nomor_stnk?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quota?: keyof typeof SortOrder;

    @Field(() => SubsidyQuotaCountOrderByAggregateInput, {nullable:true})
    _count?: SubsidyQuotaCountOrderByAggregateInput;

    @Field(() => SubsidyQuotaAvgOrderByAggregateInput, {nullable:true})
    _avg?: SubsidyQuotaAvgOrderByAggregateInput;

    @Field(() => SubsidyQuotaMaxOrderByAggregateInput, {nullable:true})
    _max?: SubsidyQuotaMaxOrderByAggregateInput;

    @Field(() => SubsidyQuotaMinOrderByAggregateInput, {nullable:true})
    _min?: SubsidyQuotaMinOrderByAggregateInput;

    @Field(() => SubsidyQuotaSumOrderByAggregateInput, {nullable:true})
    _sum?: SubsidyQuotaSumOrderByAggregateInput;
}

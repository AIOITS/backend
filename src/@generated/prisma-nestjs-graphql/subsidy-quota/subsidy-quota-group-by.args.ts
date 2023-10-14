import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyQuotaWhereInput } from './subsidy-quota-where.input';
import { Type } from 'class-transformer';
import { SubsidyQuotaOrderByWithAggregationInput } from './subsidy-quota-order-by-with-aggregation.input';
import { SubsidyQuotaScalarFieldEnum } from './subsidy-quota-scalar-field.enum';
import { SubsidyQuotaScalarWhereWithAggregatesInput } from './subsidy-quota-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubsidyQuotaCountAggregateInput } from './subsidy-quota-count-aggregate.input';
import { SubsidyQuotaAvgAggregateInput } from './subsidy-quota-avg-aggregate.input';
import { SubsidyQuotaSumAggregateInput } from './subsidy-quota-sum-aggregate.input';
import { SubsidyQuotaMinAggregateInput } from './subsidy-quota-min-aggregate.input';
import { SubsidyQuotaMaxAggregateInput } from './subsidy-quota-max-aggregate.input';

@ArgsType()
export class SubsidyQuotaGroupByArgs {

    @Field(() => SubsidyQuotaWhereInput, {nullable:true})
    @Type(() => SubsidyQuotaWhereInput)
    where?: SubsidyQuotaWhereInput;

    @Field(() => [SubsidyQuotaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SubsidyQuotaOrderByWithAggregationInput>;

    @Field(() => [SubsidyQuotaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SubsidyQuotaScalarFieldEnum>;

    @Field(() => SubsidyQuotaScalarWhereWithAggregatesInput, {nullable:true})
    having?: SubsidyQuotaScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubsidyQuotaCountAggregateInput, {nullable:true})
    _count?: SubsidyQuotaCountAggregateInput;

    @Field(() => SubsidyQuotaAvgAggregateInput, {nullable:true})
    _avg?: SubsidyQuotaAvgAggregateInput;

    @Field(() => SubsidyQuotaSumAggregateInput, {nullable:true})
    _sum?: SubsidyQuotaSumAggregateInput;

    @Field(() => SubsidyQuotaMinAggregateInput, {nullable:true})
    _min?: SubsidyQuotaMinAggregateInput;

    @Field(() => SubsidyQuotaMaxAggregateInput, {nullable:true})
    _max?: SubsidyQuotaMaxAggregateInput;
}

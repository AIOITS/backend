import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubsidyQuotaCountAggregate } from './subsidy-quota-count-aggregate.output';
import { SubsidyQuotaAvgAggregate } from './subsidy-quota-avg-aggregate.output';
import { SubsidyQuotaSumAggregate } from './subsidy-quota-sum-aggregate.output';
import { SubsidyQuotaMinAggregate } from './subsidy-quota-min-aggregate.output';
import { SubsidyQuotaMaxAggregate } from './subsidy-quota-max-aggregate.output';

@ObjectType()
export class AggregateSubsidyQuota {

    @Field(() => SubsidyQuotaCountAggregate, {nullable:true})
    _count?: SubsidyQuotaCountAggregate;

    @Field(() => SubsidyQuotaAvgAggregate, {nullable:true})
    _avg?: SubsidyQuotaAvgAggregate;

    @Field(() => SubsidyQuotaSumAggregate, {nullable:true})
    _sum?: SubsidyQuotaSumAggregate;

    @Field(() => SubsidyQuotaMinAggregate, {nullable:true})
    _min?: SubsidyQuotaMinAggregate;

    @Field(() => SubsidyQuotaMaxAggregate, {nullable:true})
    _max?: SubsidyQuotaMaxAggregate;
}

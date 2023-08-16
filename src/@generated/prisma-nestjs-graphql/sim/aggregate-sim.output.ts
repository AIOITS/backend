import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SIMCountAggregate } from './sim-count-aggregate.output';
import { SIMAvgAggregate } from './sim-avg-aggregate.output';
import { SIMSumAggregate } from './sim-sum-aggregate.output';
import { SIMMinAggregate } from './sim-min-aggregate.output';
import { SIMMaxAggregate } from './sim-max-aggregate.output';

@ObjectType()
export class AggregateSIM {

    @Field(() => SIMCountAggregate, {nullable:true})
    _count?: SIMCountAggregate;

    @Field(() => SIMAvgAggregate, {nullable:true})
    _avg?: SIMAvgAggregate;

    @Field(() => SIMSumAggregate, {nullable:true})
    _sum?: SIMSumAggregate;

    @Field(() => SIMMinAggregate, {nullable:true})
    _min?: SIMMinAggregate;

    @Field(() => SIMMaxAggregate, {nullable:true})
    _max?: SIMMaxAggregate;
}

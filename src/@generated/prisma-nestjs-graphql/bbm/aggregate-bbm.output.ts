import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BbmCountAggregate } from './bbm-count-aggregate.output';
import { BbmAvgAggregate } from './bbm-avg-aggregate.output';
import { BbmSumAggregate } from './bbm-sum-aggregate.output';
import { BbmMinAggregate } from './bbm-min-aggregate.output';
import { BbmMaxAggregate } from './bbm-max-aggregate.output';

@ObjectType()
export class AggregateBbm {

    @Field(() => BbmCountAggregate, {nullable:true})
    _count?: BbmCountAggregate;

    @Field(() => BbmAvgAggregate, {nullable:true})
    _avg?: BbmAvgAggregate;

    @Field(() => BbmSumAggregate, {nullable:true})
    _sum?: BbmSumAggregate;

    @Field(() => BbmMinAggregate, {nullable:true})
    _min?: BbmMinAggregate;

    @Field(() => BbmMaxAggregate, {nullable:true})
    _max?: BbmMaxAggregate;
}

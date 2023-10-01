import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SimCountAggregate } from './sim-count-aggregate.output';
import { SimAvgAggregate } from './sim-avg-aggregate.output';
import { SimSumAggregate } from './sim-sum-aggregate.output';
import { SimMinAggregate } from './sim-min-aggregate.output';
import { SimMaxAggregate } from './sim-max-aggregate.output';

@ObjectType()
export class AggregateSim {

    @Field(() => SimCountAggregate, {nullable:true})
    _count?: SimCountAggregate;

    @Field(() => SimAvgAggregate, {nullable:true})
    _avg?: SimAvgAggregate;

    @Field(() => SimSumAggregate, {nullable:true})
    _sum?: SimSumAggregate;

    @Field(() => SimMinAggregate, {nullable:true})
    _min?: SimMinAggregate;

    @Field(() => SimMaxAggregate, {nullable:true})
    _max?: SimMaxAggregate;
}

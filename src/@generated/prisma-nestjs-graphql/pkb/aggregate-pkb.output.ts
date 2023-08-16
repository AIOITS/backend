import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PKBCountAggregate } from './pkb-count-aggregate.output';
import { PKBAvgAggregate } from './pkb-avg-aggregate.output';
import { PKBSumAggregate } from './pkb-sum-aggregate.output';
import { PKBMinAggregate } from './pkb-min-aggregate.output';
import { PKBMaxAggregate } from './pkb-max-aggregate.output';

@ObjectType()
export class AggregatePKB {

    @Field(() => PKBCountAggregate, {nullable:true})
    _count?: PKBCountAggregate;

    @Field(() => PKBAvgAggregate, {nullable:true})
    _avg?: PKBAvgAggregate;

    @Field(() => PKBSumAggregate, {nullable:true})
    _sum?: PKBSumAggregate;

    @Field(() => PKBMinAggregate, {nullable:true})
    _min?: PKBMinAggregate;

    @Field(() => PKBMaxAggregate, {nullable:true})
    _max?: PKBMaxAggregate;
}

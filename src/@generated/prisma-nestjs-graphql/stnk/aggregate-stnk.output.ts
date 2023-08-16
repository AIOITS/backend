import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { STNKCountAggregate } from './stnk-count-aggregate.output';
import { STNKMinAggregate } from './stnk-min-aggregate.output';
import { STNKMaxAggregate } from './stnk-max-aggregate.output';

@ObjectType()
export class AggregateSTNK {

    @Field(() => STNKCountAggregate, {nullable:true})
    _count?: STNKCountAggregate;

    @Field(() => STNKMinAggregate, {nullable:true})
    _min?: STNKMinAggregate;

    @Field(() => STNKMaxAggregate, {nullable:true})
    _max?: STNKMaxAggregate;
}

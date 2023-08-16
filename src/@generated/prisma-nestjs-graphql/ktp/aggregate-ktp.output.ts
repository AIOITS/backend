import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { KTPCountAggregate } from './ktp-count-aggregate.output';
import { KTPAvgAggregate } from './ktp-avg-aggregate.output';
import { KTPSumAggregate } from './ktp-sum-aggregate.output';
import { KTPMinAggregate } from './ktp-min-aggregate.output';
import { KTPMaxAggregate } from './ktp-max-aggregate.output';

@ObjectType()
export class AggregateKTP {

    @Field(() => KTPCountAggregate, {nullable:true})
    _count?: KTPCountAggregate;

    @Field(() => KTPAvgAggregate, {nullable:true})
    _avg?: KTPAvgAggregate;

    @Field(() => KTPSumAggregate, {nullable:true})
    _sum?: KTPSumAggregate;

    @Field(() => KTPMinAggregate, {nullable:true})
    _min?: KTPMinAggregate;

    @Field(() => KTPMaxAggregate, {nullable:true})
    _max?: KTPMaxAggregate;
}

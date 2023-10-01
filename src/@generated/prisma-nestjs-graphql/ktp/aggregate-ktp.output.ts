import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { KtpCountAggregate } from './ktp-count-aggregate.output';
import { KtpAvgAggregate } from './ktp-avg-aggregate.output';
import { KtpSumAggregate } from './ktp-sum-aggregate.output';
import { KtpMinAggregate } from './ktp-min-aggregate.output';
import { KtpMaxAggregate } from './ktp-max-aggregate.output';

@ObjectType()
export class AggregateKtp {

    @Field(() => KtpCountAggregate, {nullable:true})
    _count?: KtpCountAggregate;

    @Field(() => KtpAvgAggregate, {nullable:true})
    _avg?: KtpAvgAggregate;

    @Field(() => KtpSumAggregate, {nullable:true})
    _sum?: KtpSumAggregate;

    @Field(() => KtpMinAggregate, {nullable:true})
    _min?: KtpMinAggregate;

    @Field(() => KtpMaxAggregate, {nullable:true})
    _max?: KtpMaxAggregate;
}

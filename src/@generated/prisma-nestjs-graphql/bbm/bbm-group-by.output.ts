import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { BbmCategory } from '../prisma/bbm-category.enum';
import { BbmCountAggregate } from './bbm-count-aggregate.output';
import { BbmAvgAggregate } from './bbm-avg-aggregate.output';
import { BbmSumAggregate } from './bbm-sum-aggregate.output';
import { BbmMinAggregate } from './bbm-min-aggregate.output';
import { BbmMaxAggregate } from './bbm-max-aggregate.output';

@ObjectType()
export class BbmGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => Float, {nullable:false})
    price_per_liter!: number;

    @Field(() => Boolean, {nullable:false})
    is_subsidi!: boolean;

    @Field(() => BbmCategory, {nullable:false})
    category!: keyof typeof BbmCategory;

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

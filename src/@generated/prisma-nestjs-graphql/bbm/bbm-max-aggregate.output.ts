import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { BbmCategory } from '../prisma/bbm-category.enum';

@ObjectType()
export class BbmMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => Float, {nullable:true})
    price_per_liter?: number;

    @Field(() => Boolean, {nullable:true})
    is_subsidi?: boolean;

    @Field(() => BbmCategory, {nullable:true})
    category?: keyof typeof BbmCategory;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubsidyQuotaCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    nomor_stnk!: number;

    @Field(() => Int, {nullable:false})
    quota!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

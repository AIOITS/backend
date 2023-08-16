import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PKBSumAggregate {

    @Field(() => Int, {nullable:true})
    bbknb_pokok?: number;

    @Field(() => Int, {nullable:true})
    bbknb_sanksi?: number;

    @Field(() => Int, {nullable:true})
    PKB_pokok?: number;

    @Field(() => Int, {nullable:true})
    PKB_sanksi?: number;

    @Field(() => Int, {nullable:true})
    swdkllj_pokok?: number;

    @Field(() => Int, {nullable:true})
    swdkllj_sanksi?: number;

    @Field(() => Int, {nullable:true})
    administrasi_stnk_pokok?: number;

    @Field(() => Int, {nullable:true})
    administrasi_stnk_sanksi?: number;

    @Field(() => Int, {nullable:true})
    administrasi_tnkb_pokok?: number;

    @Field(() => Int, {nullable:true})
    administrasi_tnkb_sanksi?: number;
}

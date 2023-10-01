import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PkbAvgAggregate {

    @Field(() => Float, {nullable:true})
    bbknb_pokok?: number;

    @Field(() => Float, {nullable:true})
    bbknb_sanksi?: number;

    @Field(() => Float, {nullable:true})
    PKB_pokok?: number;

    @Field(() => Float, {nullable:true})
    PKB_sanksi?: number;

    @Field(() => Float, {nullable:true})
    swdkllj_pokok?: number;

    @Field(() => Float, {nullable:true})
    swdkllj_sanksi?: number;

    @Field(() => Float, {nullable:true})
    administrasi_stnk_pokok?: number;

    @Field(() => Float, {nullable:true})
    administrasi_stnk_sanksi?: number;

    @Field(() => Float, {nullable:true})
    administrasi_tnkb_pokok?: number;

    @Field(() => Float, {nullable:true})
    administrasi_tnkb_sanksi?: number;
}

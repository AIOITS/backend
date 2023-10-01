import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PkbCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    nomor_pkb?: true;

    @Field(() => Boolean, {nullable:true})
    status_pajak?: true;

    @Field(() => Boolean, {nullable:true})
    bbknb_pokok?: true;

    @Field(() => Boolean, {nullable:true})
    bbknb_sanksi?: true;

    @Field(() => Boolean, {nullable:true})
    PKB_pokok?: true;

    @Field(() => Boolean, {nullable:true})
    PKB_sanksi?: true;

    @Field(() => Boolean, {nullable:true})
    swdkllj_pokok?: true;

    @Field(() => Boolean, {nullable:true})
    swdkllj_sanksi?: true;

    @Field(() => Boolean, {nullable:true})
    administrasi_stnk_pokok?: true;

    @Field(() => Boolean, {nullable:true})
    administrasi_stnk_sanksi?: true;

    @Field(() => Boolean, {nullable:true})
    administrasi_tnkb_pokok?: true;

    @Field(() => Boolean, {nullable:true})
    administrasi_tnkb_sanksi?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

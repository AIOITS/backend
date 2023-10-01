import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PkbUncheckedCreateWithoutStnkInput {

    @Field(() => String, {nullable:false})
    nomor_pkb!: string;

    @Field(() => Boolean, {nullable:false})
    status_pajak!: boolean;

    @Field(() => Int, {nullable:false})
    bbknb_pokok!: number;

    @Field(() => Int, {nullable:false})
    bbknb_sanksi!: number;

    @Field(() => Int, {nullable:false})
    PKB_pokok!: number;

    @Field(() => Int, {nullable:false})
    PKB_sanksi!: number;

    @Field(() => Int, {nullable:false})
    swdkllj_pokok!: number;

    @Field(() => Int, {nullable:false})
    swdkllj_sanksi!: number;

    @Field(() => Int, {nullable:false})
    administrasi_stnk_pokok!: number;

    @Field(() => Int, {nullable:false})
    administrasi_stnk_sanksi!: number;

    @Field(() => Int, {nullable:false})
    administrasi_tnkb_pokok!: number;

    @Field(() => Int, {nullable:false})
    administrasi_tnkb_sanksi!: number;
}

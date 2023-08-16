import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class PKBWhereInput {

    @Field(() => [PKBWhereInput], {nullable:true})
    AND?: Array<PKBWhereInput>;

    @Field(() => [PKBWhereInput], {nullable:true})
    OR?: Array<PKBWhereInput>;

    @Field(() => [PKBWhereInput], {nullable:true})
    NOT?: Array<PKBWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    nomor_PKB?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    status_pajak?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    bbknb_pokok?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    bbknb_sanksi?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    PKB_pokok?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    PKB_sanksi?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    swdkllj_pokok?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    swdkllj_sanksi?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    administrasi_stnk_pokok?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    administrasi_stnk_sanksi?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    administrasi_tnkb_pokok?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    administrasi_tnkb_sanksi?: IntFilter;
}

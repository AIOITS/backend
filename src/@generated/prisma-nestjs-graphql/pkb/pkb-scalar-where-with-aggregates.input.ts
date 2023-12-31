import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PkbScalarWhereWithAggregatesInput {

    @Field(() => [PkbScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PkbScalarWhereWithAggregatesInput>;

    @Field(() => [PkbScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PkbScalarWhereWithAggregatesInput>;

    @Field(() => [PkbScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PkbScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    nomor_pkb?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    status_pajak?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    bbknb_pokok?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    bbknb_sanksi?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    PKB_pokok?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    PKB_sanksi?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    swdkllj_pokok?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    swdkllj_sanksi?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    administrasi_stnk_pokok?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    administrasi_stnk_sanksi?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    administrasi_tnkb_pokok?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    administrasi_tnkb_sanksi?: IntWithAggregatesFilter;
}

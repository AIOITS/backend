import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KategoriPengisian } from './kategori-pengisian.enum';
import { NestedEnumKategoriPengisianWithAggregatesFilter } from './nested-enum-kategori-pengisian-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumKategoriPengisianFilter } from './nested-enum-kategori-pengisian-filter.input';

@InputType()
export class EnumKategoriPengisianWithAggregatesFilter {

    @Field(() => KategoriPengisian, {nullable:true})
    equals?: keyof typeof KategoriPengisian;

    @Field(() => [KategoriPengisian], {nullable:true})
    in?: Array<keyof typeof KategoriPengisian>;

    @Field(() => [KategoriPengisian], {nullable:true})
    notIn?: Array<keyof typeof KategoriPengisian>;

    @Field(() => NestedEnumKategoriPengisianWithAggregatesFilter, {nullable:true})
    not?: NestedEnumKategoriPengisianWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumKategoriPengisianFilter, {nullable:true})
    _min?: NestedEnumKategoriPengisianFilter;

    @Field(() => NestedEnumKategoriPengisianFilter, {nullable:true})
    _max?: NestedEnumKategoriPengisianFilter;
}

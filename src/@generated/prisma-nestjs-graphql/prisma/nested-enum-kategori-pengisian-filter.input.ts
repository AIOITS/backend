import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KategoriPengisian } from './kategori-pengisian.enum';

@InputType()
export class NestedEnumKategoriPengisianFilter {

    @Field(() => KategoriPengisian, {nullable:true})
    equals?: keyof typeof KategoriPengisian;

    @Field(() => [KategoriPengisian], {nullable:true})
    in?: Array<keyof typeof KategoriPengisian>;

    @Field(() => [KategoriPengisian], {nullable:true})
    notIn?: Array<keyof typeof KategoriPengisian>;

    @Field(() => NestedEnumKategoriPengisianFilter, {nullable:true})
    not?: NestedEnumKategoriPengisianFilter;
}

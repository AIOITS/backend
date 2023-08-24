import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KategoriPengisian } from './kategori-pengisian.enum'
import { NestedEnumKategoriPengisianFilter } from './nested-enum-kategori-pengisian-filter.input'

@InputType()
export class EnumKategoriPengisianFilter {
  @Field(() => KategoriPengisian, { nullable: true })
  equals?: keyof typeof KategoriPengisian;

  @Field(() => [KategoriPengisian], { nullable: true })
  in?: Array<keyof typeof KategoriPengisian>

  @Field(() => [KategoriPengisian], { nullable: true })
  notIn?: Array<keyof typeof KategoriPengisian>

  @Field(() => NestedEnumKategoriPengisianFilter, { nullable: true })
  not?: NestedEnumKategoriPengisianFilter
}

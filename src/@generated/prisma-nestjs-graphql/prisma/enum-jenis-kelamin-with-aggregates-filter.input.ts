import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JenisKelamin } from './jenis-kelamin.enum';
import { NestedEnumJenisKelaminWithAggregatesFilter } from './nested-enum-jenis-kelamin-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumJenisKelaminFilter } from './nested-enum-jenis-kelamin-filter.input';

@InputType()
export class EnumJenisKelaminWithAggregatesFilter {

    @Field(() => JenisKelamin, {nullable:true})
    equals?: keyof typeof JenisKelamin;

    @Field(() => [JenisKelamin], {nullable:true})
    in?: Array<keyof typeof JenisKelamin>;

    @Field(() => [JenisKelamin], {nullable:true})
    notIn?: Array<keyof typeof JenisKelamin>;

    @Field(() => NestedEnumJenisKelaminWithAggregatesFilter, {nullable:true})
    not?: NestedEnumJenisKelaminWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumJenisKelaminFilter, {nullable:true})
    _min?: NestedEnumJenisKelaminFilter;

    @Field(() => NestedEnumJenisKelaminFilter, {nullable:true})
    _max?: NestedEnumJenisKelaminFilter;
}

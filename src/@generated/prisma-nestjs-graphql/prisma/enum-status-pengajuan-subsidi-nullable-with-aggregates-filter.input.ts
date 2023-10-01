import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatusPengajuanSubsidi } from './status-pengajuan-subsidi.enum';
import { NestedEnumStatusPengajuanSubsidiNullableWithAggregatesFilter } from './nested-enum-status-pengajuan-subsidi-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumStatusPengajuanSubsidiNullableFilter } from './nested-enum-status-pengajuan-subsidi-nullable-filter.input';

@InputType()
export class EnumStatusPengajuanSubsidiNullableWithAggregatesFilter {

    @Field(() => StatusPengajuanSubsidi, {nullable:true})
    equals?: keyof typeof StatusPengajuanSubsidi;

    @Field(() => [StatusPengajuanSubsidi], {nullable:true})
    in?: Array<keyof typeof StatusPengajuanSubsidi>;

    @Field(() => [StatusPengajuanSubsidi], {nullable:true})
    notIn?: Array<keyof typeof StatusPengajuanSubsidi>;

    @Field(() => NestedEnumStatusPengajuanSubsidiNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumStatusPengajuanSubsidiNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumStatusPengajuanSubsidiNullableFilter, {nullable:true})
    _min?: NestedEnumStatusPengajuanSubsidiNullableFilter;

    @Field(() => NestedEnumStatusPengajuanSubsidiNullableFilter, {nullable:true})
    _max?: NestedEnumStatusPengajuanSubsidiNullableFilter;
}

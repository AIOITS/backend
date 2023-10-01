import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatusPengajuanSubsidi } from './status-pengajuan-subsidi.enum';

@InputType()
export class NestedEnumStatusPengajuanSubsidiNullableFilter {

    @Field(() => StatusPengajuanSubsidi, {nullable:true})
    equals?: keyof typeof StatusPengajuanSubsidi;

    @Field(() => [StatusPengajuanSubsidi], {nullable:true})
    in?: Array<keyof typeof StatusPengajuanSubsidi>;

    @Field(() => [StatusPengajuanSubsidi], {nullable:true})
    notIn?: Array<keyof typeof StatusPengajuanSubsidi>;

    @Field(() => NestedEnumStatusPengajuanSubsidiNullableFilter, {nullable:true})
    not?: NestedEnumStatusPengajuanSubsidiNullableFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumStatusPengajuanSubsidiNullableFilter } from '../prisma/enum-status-pengajuan-subsidi-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class AjuanSubsidiScalarWhereInput {

    @Field(() => [AjuanSubsidiScalarWhereInput], {nullable:true})
    AND?: Array<AjuanSubsidiScalarWhereInput>;

    @Field(() => [AjuanSubsidiScalarWhereInput], {nullable:true})
    OR?: Array<AjuanSubsidiScalarWhereInput>;

    @Field(() => [AjuanSubsidiScalarWhereInput], {nullable:true})
    NOT?: Array<AjuanSubsidiScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    nomor_stnk?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    jumlah?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    alasan?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    tanggal_pengajuan?: DateTimeFilter;

    @Field(() => EnumStatusPengajuanSubsidiNullableFilter, {nullable:true})
    status_pengajuan?: EnumStatusPengajuanSubsidiNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    user_id?: IntNullableFilter;
}

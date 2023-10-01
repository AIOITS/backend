import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SimWhereInput } from './sim-where.input';
import { EnumJenisSimFilter } from '../prisma/enum-jenis-sim-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { KtpNullableRelationFilter } from '../ktp/ktp-nullable-relation-filter.input';

@InputType()
export class SimWhereUniqueInput {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:true})
    nomor_sim?: string;

    @Field(() => [SimWhereInput], {nullable:true})
    AND?: Array<SimWhereInput>;

    @Field(() => [SimWhereInput], {nullable:true})
    OR?: Array<SimWhereInput>;

    @Field(() => [SimWhereInput], {nullable:true})
    NOT?: Array<SimWhereInput>;

    @Field(() => EnumJenisSimFilter, {nullable:true})
    jenis_sim?: EnumJenisSimFilter;

    @Field(() => StringFilter, {nullable:true})
    nama?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    alamat?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rt?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    rw?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    kelurahan_desa?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    kecamatan?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    kabupaten?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    pekerjaan?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    kabupaten_terbit?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    tanggal_terbit?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    penerbit?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    berlaku_sampai?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    nik?: StringNullableFilter;

    @Field(() => KtpNullableRelationFilter, {nullable:true})
    ktp?: KtpNullableRelationFilter;
}

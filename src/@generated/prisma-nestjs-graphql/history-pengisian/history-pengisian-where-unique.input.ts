import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HistoryPengisianWhereInput } from './history-pengisian-where.input';
import { EnumKategoriPengisianFilter } from '../prisma/enum-kategori-pengisian-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DeviceRelationFilter } from '../device/device-relation-filter.input';
import { SpbuRelationFilter } from '../spbu/spbu-relation-filter.input';
import { BbmNullableRelationFilter } from '../bbm/bbm-nullable-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { StnkRelationFilter } from '../stnk/stnk-relation-filter.input';

@InputType()
export class HistoryPengisianWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [HistoryPengisianWhereInput], {nullable:true})
    AND?: Array<HistoryPengisianWhereInput>;

    @Field(() => [HistoryPengisianWhereInput], {nullable:true})
    OR?: Array<HistoryPengisianWhereInput>;

    @Field(() => [HistoryPengisianWhereInput], {nullable:true})
    NOT?: Array<HistoryPengisianWhereInput>;

    @Field(() => EnumKategoriPengisianFilter, {nullable:true})
    kategori_pengisian?: EnumKategoriPengisianFilter;

    @Field(() => StringFilter, {nullable:true})
    device_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    jenis_kendaraan?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    spbu_id?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    jumlah?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    bbm_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    nomor_stnk?: StringFilter;

    @Field(() => DeviceRelationFilter, {nullable:true})
    device?: DeviceRelationFilter;

    @Field(() => SpbuRelationFilter, {nullable:true})
    spbu?: SpbuRelationFilter;

    @Field(() => BbmNullableRelationFilter, {nullable:true})
    bbm?: BbmNullableRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    user?: UserNullableRelationFilter;

    @Field(() => StnkRelationFilter, {nullable:true})
    stnk?: StnkRelationFilter;
}

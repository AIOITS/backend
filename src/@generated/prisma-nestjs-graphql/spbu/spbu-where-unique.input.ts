import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SpbuWhereInput } from './spbu-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DeviceListRelationFilter } from '../device/device-list-relation-filter.input';
import { HistoryPengisianListRelationFilter } from '../history-pengisian/history-pengisian-list-relation-filter.input';

@InputType()
export class SpbuWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [SpbuWhereInput], {nullable:true})
    AND?: Array<SpbuWhereInput>;

    @Field(() => [SpbuWhereInput], {nullable:true})
    OR?: Array<SpbuWhereInput>;

    @Field(() => [SpbuWhereInput], {nullable:true})
    NOT?: Array<SpbuWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    alamat?: StringFilter;

    @Field(() => DeviceListRelationFilter, {nullable:true})
    device?: DeviceListRelationFilter;

    @Field(() => HistoryPengisianListRelationFilter, {nullable:true})
    historyPengisian?: HistoryPengisianListRelationFilter;
}

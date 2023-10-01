import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereInput } from './device-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { SpbuRelationFilter } from '../spbu/spbu-relation-filter.input';
import { HistoryPengisianListRelationFilter } from '../history-pengisian/history-pengisian-list-relation-filter.input';

@InputType()
export class DeviceWhereUniqueInput {

    @Field(() => String, {nullable:true})
    device_id?: string;

    @Field(() => [DeviceWhereInput], {nullable:true})
    AND?: Array<DeviceWhereInput>;

    @Field(() => [DeviceWhereInput], {nullable:true})
    OR?: Array<DeviceWhereInput>;

    @Field(() => [DeviceWhereInput], {nullable:true})
    NOT?: Array<DeviceWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    spbu_id?: IntFilter;

    @Field(() => SpbuRelationFilter, {nullable:true})
    spbu?: SpbuRelationFilter;

    @Field(() => HistoryPengisianListRelationFilter, {nullable:true})
    historyPengisian?: HistoryPengisianListRelationFilter;
}

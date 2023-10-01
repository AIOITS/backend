import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Device } from '../device/device.model';
import { HistoryPengisian } from '../history-pengisian/history-pengisian.model';
import { SpbuCount } from './spbu-count.output';

@ObjectType()
export class Spbu {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    alamat!: string;

    @Field(() => [Device], {nullable:true})
    device?: Array<Device>;

    @Field(() => [HistoryPengisian], {nullable:true})
    historyPengisian?: Array<HistoryPengisian>;

    @Field(() => SpbuCount, {nullable:false})
    _count?: SpbuCount;
}

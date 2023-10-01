import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereInput } from './device-where.input';
import { Type } from 'class-transformer';
import { DeviceUpdateWithoutHistoryPengisianInput } from './device-update-without-history-pengisian.input';

@InputType()
export class DeviceUpdateToOneWithWhereWithoutHistoryPengisianInput {

    @Field(() => DeviceWhereInput, {nullable:true})
    @Type(() => DeviceWhereInput)
    where?: DeviceWhereInput;

    @Field(() => DeviceUpdateWithoutHistoryPengisianInput, {nullable:false})
    @Type(() => DeviceUpdateWithoutHistoryPengisianInput)
    data!: DeviceUpdateWithoutHistoryPengisianInput;
}

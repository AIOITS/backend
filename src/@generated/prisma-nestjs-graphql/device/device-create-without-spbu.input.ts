import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HistoryPengisianCreateNestedManyWithoutDeviceInput } from '../history-pengisian/history-pengisian-create-nested-many-without-device.input';

@InputType()
export class DeviceCreateWithoutSpbuInput {

    @Field(() => String, {nullable:false})
    device_id!: string;

    @Field(() => HistoryPengisianCreateNestedManyWithoutDeviceInput, {nullable:true})
    historyPengisian?: HistoryPengisianCreateNestedManyWithoutDeviceInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpbuCreateNestedOneWithoutDeviceInput } from '../spbu/spbu-create-nested-one-without-device.input';
import { HistoryPengisianCreateNestedManyWithoutDeviceInput } from '../history-pengisian/history-pengisian-create-nested-many-without-device.input';

@InputType()
export class DeviceCreateInput {

    @Field(() => String, {nullable:false})
    device_id!: string;

    @Field(() => SpbuCreateNestedOneWithoutDeviceInput, {nullable:false})
    spbu!: SpbuCreateNestedOneWithoutDeviceInput;

    @Field(() => HistoryPengisianCreateNestedManyWithoutDeviceInput, {nullable:true})
    historyPengisian?: HistoryPengisianCreateNestedManyWithoutDeviceInput;
}

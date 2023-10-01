import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HistoryPengisianUpdateManyWithoutDeviceNestedInput } from '../history-pengisian/history-pengisian-update-many-without-device-nested.input';

@InputType()
export class DeviceUpdateWithoutSpbuInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    device_id?: StringFieldUpdateOperationsInput;

    @Field(() => HistoryPengisianUpdateManyWithoutDeviceNestedInput, {nullable:true})
    historyPengisian?: HistoryPengisianUpdateManyWithoutDeviceNestedInput;
}

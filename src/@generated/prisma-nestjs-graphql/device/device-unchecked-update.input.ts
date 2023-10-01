import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { HistoryPengisianUncheckedUpdateManyWithoutDeviceNestedInput } from '../history-pengisian/history-pengisian-unchecked-update-many-without-device-nested.input';

@InputType()
export class DeviceUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    device_id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    spbu_id?: IntFieldUpdateOperationsInput;

    @Field(() => HistoryPengisianUncheckedUpdateManyWithoutDeviceNestedInput, {nullable:true})
    historyPengisian?: HistoryPengisianUncheckedUpdateManyWithoutDeviceNestedInput;
}

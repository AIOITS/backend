import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DeviceUpdateManyWithoutSpbuNestedInput } from '../device/device-update-many-without-spbu-nested.input';
import { HistoryPengisianUpdateManyWithoutSpbuNestedInput } from '../history-pengisian/history-pengisian-update-many-without-spbu-nested.input';

@InputType()
export class SpbuUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    alamat?: StringFieldUpdateOperationsInput;

    @Field(() => DeviceUpdateManyWithoutSpbuNestedInput, {nullable:true})
    device?: DeviceUpdateManyWithoutSpbuNestedInput;

    @Field(() => HistoryPengisianUpdateManyWithoutSpbuNestedInput, {nullable:true})
    historyPengisian?: HistoryPengisianUpdateManyWithoutSpbuNestedInput;
}

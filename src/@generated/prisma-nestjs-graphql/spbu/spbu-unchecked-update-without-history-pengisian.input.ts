import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DeviceUncheckedUpdateManyWithoutSpbuNestedInput } from '../device/device-unchecked-update-many-without-spbu-nested.input';

@InputType()
export class SpbuUncheckedUpdateWithoutHistoryPengisianInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    alamat?: StringFieldUpdateOperationsInput;

    @Field(() => DeviceUncheckedUpdateManyWithoutSpbuNestedInput, {nullable:true})
    device?: DeviceUncheckedUpdateManyWithoutSpbuNestedInput;
}

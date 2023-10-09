import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AjuanSubsidiUpdateManyWithoutUserNestedInput } from '../ajuan-subsidi/ajuan-subsidi-update-many-without-user-nested.input';
import { KtpUpdateOneRequiredWithoutUserNestedInput } from '../ktp/ktp-update-one-required-without-user-nested.input';

@InputType()
export class UserUpdateWithoutHistory_pengisianInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    saldo?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    role?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AjuanSubsidiUpdateManyWithoutUserNestedInput, {nullable:true})
    ajuan_subsidi?: AjuanSubsidiUpdateManyWithoutUserNestedInput;

    @Field(() => KtpUpdateOneRequiredWithoutUserNestedInput, {nullable:true})
    ktp?: KtpUpdateOneRequiredWithoutUserNestedInput;
}

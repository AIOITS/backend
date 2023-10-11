import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableEnumStatusPengajuanSubsidiFieldUpdateOperationsInput } from '../prisma/nullable-enum-status-pengajuan-subsidi-field-update-operations.input';
import { FileUpdateManyWithoutAjuanSubsidiNestedInput } from '../file/file-update-many-without-ajuan-subsidi-nested.input';
import { UserUpdateOneWithoutAjuan_subsidiNestedInput } from '../user/user-update-one-without-ajuan-subsidi-nested.input';

@InputType()
export class AjuanSubsidiUpdateWithoutStnkInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    jumlah?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    alasan?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    tanggal_pengajuan?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableEnumStatusPengajuanSubsidiFieldUpdateOperationsInput, {nullable:true})
    status_pengajuan?: NullableEnumStatusPengajuanSubsidiFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FileUpdateManyWithoutAjuanSubsidiNestedInput, {nullable:true})
    dokumen_pendukung?: FileUpdateManyWithoutAjuanSubsidiNestedInput;

    @Field(() => UserUpdateOneWithoutAjuan_subsidiNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutAjuan_subsidiNestedInput;
}

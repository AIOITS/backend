import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { AjuanSubsidiUpdatedokumen_pendukungInput } from './ajuan-subsidi-updatedokumen-pendukung.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { EnumStatusPengajuanSubsidiFieldUpdateOperationsInput } from '../prisma/enum-status-pengajuan-subsidi-field-update-operations.input'

@InputType()
export class AjuanSubsidiUpdateWithoutUserInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  jumlah?: IntFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  alasan?: StringFieldUpdateOperationsInput

  @Field(() => AjuanSubsidiUpdatedokumen_pendukungInput, { nullable: true })
  dokumen_pendukung?: AjuanSubsidiUpdatedokumen_pendukungInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  tanggal_pengajuan?: DateTimeFieldUpdateOperationsInput

  @Field(() => EnumStatusPengajuanSubsidiFieldUpdateOperationsInput, {
    nullable: true,
  })
  status_pengajuan?: EnumStatusPengajuanSubsidiFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

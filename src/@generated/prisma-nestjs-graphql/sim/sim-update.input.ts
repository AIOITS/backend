import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { EnumJenisSimFieldUpdateOperationsInput } from '../prisma/enum-jenis-sim-field-update-operations.input'
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { KtpUpdateOneWithoutSimNestedInput } from '../ktp/ktp-update-one-without-sim-nested.input'

@InputType()
export class SimUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  uid?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  nomor_sim?: StringFieldUpdateOperationsInput

  @Field(() => EnumJenisSimFieldUpdateOperationsInput, { nullable: true })
  jenis_sim?: EnumJenisSimFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  nama?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  alamat?: StringFieldUpdateOperationsInput

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rt?: IntFieldUpdateOperationsInput

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rw?: IntFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  kelurahan_desa?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  kecamatan?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  kabupaten?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  pekerjaan?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  kabupaten_terbit?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  tanggal_terbit?: DateTimeFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  penerbit?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  berlaku_sampai?: DateTimeFieldUpdateOperationsInput

  @Field(() => KtpUpdateOneWithoutSimNestedInput, { nullable: true })
  ktp?: KtpUpdateOneWithoutSimNestedInput
}

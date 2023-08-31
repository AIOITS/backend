import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input'
import { EnumJenisKelaminFieldUpdateOperationsInput } from '../prisma/enum-jenis-kelamin-field-update-operations.input'
import { EnumGolonganDarahFieldUpdateOperationsInput } from '../prisma/enum-golongan-darah-field-update-operations.input'
import { EnumAgamaFieldUpdateOperationsInput } from '../prisma/enum-agama-field-update-operations.input'
import { EnumStatusPerkawinanFieldUpdateOperationsInput } from '../prisma/enum-status-perkawinan-field-update-operations.input'
import { SimUpdateManyWithoutKtpNestedInput } from '../sim/sim-update-many-without-ktp-nested.input'
import { UserUpdateOneWithoutKtpNestedInput } from '../user/user-update-one-without-ktp-nested.input'

@InputType()
export class KtpUpdateWithoutStnkInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  nik?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  nama?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  tempat_lahir?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  tanggal_lahir?: DateTimeFieldUpdateOperationsInput

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
  kabupaten_kota?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provinsi?: StringFieldUpdateOperationsInput

  @Field(() => EnumJenisKelaminFieldUpdateOperationsInput, { nullable: true })
  jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput

  @Field(() => EnumGolonganDarahFieldUpdateOperationsInput, { nullable: true })
  golongan_darah?: EnumGolonganDarahFieldUpdateOperationsInput

  @Field(() => EnumAgamaFieldUpdateOperationsInput, { nullable: true })
  agama?: EnumAgamaFieldUpdateOperationsInput

  @Field(() => EnumStatusPerkawinanFieldUpdateOperationsInput, {
    nullable: true,
  })
  status_perkawinan?: EnumStatusPerkawinanFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  pekerjaan?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  kewarganegaraan?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  tanggal_terbit?: DateTimeFieldUpdateOperationsInput

  @Field(() => SimUpdateManyWithoutKtpNestedInput, { nullable: true })
  sim?: SimUpdateManyWithoutKtpNestedInput

  @Field(() => UserUpdateOneWithoutKtpNestedInput, { nullable: true })
  user?: UserUpdateOneWithoutKtpNestedInput
}

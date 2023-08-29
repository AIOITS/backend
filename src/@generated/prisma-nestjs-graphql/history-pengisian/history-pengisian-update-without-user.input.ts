import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EnumKategoriPengisianFieldUpdateOperationsInput } from '../prisma/enum-kategori-pengisian-field-update-operations.input'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { StnkUpdateOneRequiredWithoutHistory_pengisianNestedInput } from '../stnk/stnk-update-one-required-without-history-pengisian-nested.input'

@InputType()
export class HistoryPengisianUpdateWithoutUserInput {
  @Field(() => EnumKategoriPengisianFieldUpdateOperationsInput, {
    nullable: true,
  })
  kategori_pengisian?: EnumKategoriPengisianFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  nama_spbu?: StringFieldUpdateOperationsInput

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  jumlah?: FloatFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => StnkUpdateOneRequiredWithoutHistory_pengisianNestedInput, {
    nullable: true,
  })
  stnk?: StnkUpdateOneRequiredWithoutHistory_pengisianNestedInput
}
import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { AjuanSubsidiUpdateOneWithoutDokumen_pendukungNestedInput } from '../ajuan-subsidi/ajuan-subsidi-update-one-without-dokumen-pendukung-nested.input'

@InputType()
export class FileUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  url?: StringFieldUpdateOperationsInput

  @Field(() => AjuanSubsidiUpdateOneWithoutDokumen_pendukungNestedInput, {
    nullable: true,
  })
  ajuanSubsidi?: AjuanSubsidiUpdateOneWithoutDokumen_pendukungNestedInput
}

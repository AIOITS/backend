import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserUpdatenameInput } from './user-updatename.input'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { KtpUpdateOneRequiredWithoutUserNestedInput } from '../ktp/ktp-update-one-required-without-user-nested.input'

@InputType()
export class UserUpdateWithoutNomor_simInput {
  @Field(() => UserUpdatenameInput, { nullable: true })
  name?: UserUpdatenameInput

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  email?: NullableStringFieldUpdateOperationsInput

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  phone?: NullableStringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  role?: IntFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => KtpUpdateOneRequiredWithoutUserNestedInput, { nullable: true })
  ktp?: KtpUpdateOneRequiredWithoutUserNestedInput
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input'

@InputType()
export class BbmUncheckedUpdateManyInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  type?: StringFieldUpdateOperationsInput

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  price_per_liter?: FloatFieldUpdateOperationsInput
}

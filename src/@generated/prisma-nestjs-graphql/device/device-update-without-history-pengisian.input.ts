import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { SpbuUpdateOneRequiredWithoutDeviceNestedInput } from '../spbu/spbu-update-one-required-without-device-nested.input'

@InputType()
export class DeviceUpdateWithoutHistoryPengisianInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  device_id?: StringFieldUpdateOperationsInput

  @Field(() => SpbuUpdateOneRequiredWithoutDeviceNestedInput, {
    nullable: true,
  })
  spbu?: SpbuUpdateOneRequiredWithoutDeviceNestedInput
}

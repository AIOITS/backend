import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { HistoryPengisianUncheckedUpdateManyWithoutDeviceNestedInput } from '../history-pengisian/history-pengisian-unchecked-update-many-without-device-nested.input'

@InputType()
export class DeviceUncheckedUpdateWithoutSpbuInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  device_id?: StringFieldUpdateOperationsInput

  @Field(() => HistoryPengisianUncheckedUpdateManyWithoutDeviceNestedInput, {
    nullable: true,
  })
  historyPengisian?: HistoryPengisianUncheckedUpdateManyWithoutDeviceNestedInput
}

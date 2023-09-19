import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HistoryPengisianUncheckedCreateNestedManyWithoutDeviceInput } from '../history-pengisian/history-pengisian-unchecked-create-nested-many-without-device.input'

@InputType()
export class DeviceUncheckedCreateWithoutSpbuInput {
  @Field(() => String, { nullable: false })
  device_id!: string

  @Field(() => HistoryPengisianUncheckedCreateNestedManyWithoutDeviceInput, {
    nullable: true,
  })
  historyPengisian?: HistoryPengisianUncheckedCreateNestedManyWithoutDeviceInput
}

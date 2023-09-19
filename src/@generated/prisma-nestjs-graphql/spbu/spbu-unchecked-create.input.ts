import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { DeviceUncheckedCreateNestedManyWithoutSpbuInput } from '../device/device-unchecked-create-nested-many-without-spbu.input'
import { HistoryPengisianUncheckedCreateNestedManyWithoutSpbuInput } from '../history-pengisian/history-pengisian-unchecked-create-nested-many-without-spbu.input'

@InputType()
export class SpbuUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  alamat!: string

  @Field(() => DeviceUncheckedCreateNestedManyWithoutSpbuInput, {
    nullable: true,
  })
  device?: DeviceUncheckedCreateNestedManyWithoutSpbuInput

  @Field(() => HistoryPengisianUncheckedCreateNestedManyWithoutSpbuInput, {
    nullable: true,
  })
  historyPengisian?: HistoryPengisianUncheckedCreateNestedManyWithoutSpbuInput
}

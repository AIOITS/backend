import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { DeviceUpdateWithoutHistoryPengisianInput } from './device-update-without-history-pengisian.input'
import { Type } from 'class-transformer'
import { DeviceCreateWithoutHistoryPengisianInput } from './device-create-without-history-pengisian.input'
import { DeviceWhereInput } from './device-where.input'

@InputType()
export class DeviceUpsertWithoutHistoryPengisianInput {
  @Field(() => DeviceUpdateWithoutHistoryPengisianInput, { nullable: false })
  @Type(() => DeviceUpdateWithoutHistoryPengisianInput)
  update!: DeviceUpdateWithoutHistoryPengisianInput

  @Field(() => DeviceCreateWithoutHistoryPengisianInput, { nullable: false })
  @Type(() => DeviceCreateWithoutHistoryPengisianInput)
  create!: DeviceCreateWithoutHistoryPengisianInput

  @Field(() => DeviceWhereInput, { nullable: true })
  @Type(() => DeviceWhereInput)
  where?: DeviceWhereInput
}

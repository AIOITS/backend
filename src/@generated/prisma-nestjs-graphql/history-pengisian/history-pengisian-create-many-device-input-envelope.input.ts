import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HistoryPengisianCreateManyDeviceInput } from './history-pengisian-create-many-device.input'
import { Type } from 'class-transformer'

@InputType()
export class HistoryPengisianCreateManyDeviceInputEnvelope {
  @Field(() => [HistoryPengisianCreateManyDeviceInput], { nullable: false })
  @Type(() => HistoryPengisianCreateManyDeviceInput)
  data!: Array<HistoryPengisianCreateManyDeviceInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

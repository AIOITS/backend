import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HistoryPengisianCreateManyBbmInput } from './history-pengisian-create-many-bbm.input'
import { Type } from 'class-transformer'

@InputType()
export class HistoryPengisianCreateManyBbmInputEnvelope {
  @Field(() => [HistoryPengisianCreateManyBbmInput], { nullable: false })
  @Type(() => HistoryPengisianCreateManyBbmInput)
  data!: Array<HistoryPengisianCreateManyBbmInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

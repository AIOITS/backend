import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HistoryPengisianCreateManyUserInput } from './history-pengisian-create-many-user.input'
import { Type } from 'class-transformer'

@InputType()
export class HistoryPengisianCreateManyUserInputEnvelope {
  @Field(() => [HistoryPengisianCreateManyUserInput], { nullable: false })
  @Type(() => HistoryPengisianCreateManyUserInput)
  data!: Array<HistoryPengisianCreateManyUserInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

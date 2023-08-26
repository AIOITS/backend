import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { HistoryPengisianCreateInput } from './history-pengisian-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOneHistoryPengisianArgs {
  @Field(() => HistoryPengisianCreateInput, { nullable: false })
  @Type(() => HistoryPengisianCreateInput)
  data!: HistoryPengisianCreateInput
}

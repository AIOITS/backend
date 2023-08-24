import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { history_pengisianCreateInput } from '../history-pengisian/history-pengisian-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOnehistoryPengisianArgs {
  @Field(() => history_pengisianCreateInput, { nullable: false })
  @Type(() => history_pengisianCreateInput)
  data!: history_pengisianCreateInput
}

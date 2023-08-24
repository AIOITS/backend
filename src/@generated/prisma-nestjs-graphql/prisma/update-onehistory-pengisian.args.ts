import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { history_pengisianUpdateInput } from '../history-pengisian/history-pengisian-update.input'
import { Type } from 'class-transformer'
import { history_pengisianWhereUniqueInput } from '../history-pengisian/history-pengisian-where-unique.input'

@ArgsType()
export class UpdateOnehistoryPengisianArgs {
  @Field(() => history_pengisianUpdateInput, { nullable: false })
  @Type(() => history_pengisianUpdateInput)
  data!: history_pengisianUpdateInput

  @Field(() => history_pengisianWhereUniqueInput, { nullable: false })
  @Type(() => history_pengisianWhereUniqueInput)
  where!: history_pengisianWhereUniqueInput
}

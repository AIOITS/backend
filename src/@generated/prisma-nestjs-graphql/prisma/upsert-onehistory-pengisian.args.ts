import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { history_pengisianWhereUniqueInput } from '../history-pengisian/history-pengisian-where-unique.input'
import { Type } from 'class-transformer'
import { history_pengisianCreateInput } from '../history-pengisian/history-pengisian-create.input'
import { history_pengisianUpdateInput } from '../history-pengisian/history-pengisian-update.input'

@ArgsType()
export class UpsertOnehistoryPengisianArgs {
  @Field(() => history_pengisianWhereUniqueInput, { nullable: false })
  @Type(() => history_pengisianWhereUniqueInput)
  where!: history_pengisianWhereUniqueInput

  @Field(() => history_pengisianCreateInput, { nullable: false })
  @Type(() => history_pengisianCreateInput)
  create!: history_pengisianCreateInput

  @Field(() => history_pengisianUpdateInput, { nullable: false })
  @Type(() => history_pengisianUpdateInput)
  update!: history_pengisianUpdateInput
}

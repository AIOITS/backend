import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { history_pengisianWhereUniqueInput } from '../history-pengisian/history-pengisian-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteOnehistoryPengisianArgs {
  @Field(() => history_pengisianWhereUniqueInput, { nullable: false })
  @Type(() => history_pengisianWhereUniqueInput)
  where!: history_pengisianWhereUniqueInput
}

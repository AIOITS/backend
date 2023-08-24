import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { history_pengisianWhereInput } from '../history-pengisian/history-pengisian-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyhistoryPengisianArgs {
  @Field(() => history_pengisianWhereInput, { nullable: true })
  @Type(() => history_pengisianWhereInput)
  where?: history_pengisianWhereInput
}

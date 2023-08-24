import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { history_pengisianUpdateManyMutationInput } from '../history-pengisian/history-pengisian-update-many-mutation.input'
import { Type } from 'class-transformer'
import { history_pengisianWhereInput } from '../history-pengisian/history-pengisian-where.input'

@ArgsType()
export class UpdateManyhistoryPengisianArgs {
  @Field(() => history_pengisianUpdateManyMutationInput, { nullable: false })
  @Type(() => history_pengisianUpdateManyMutationInput)
  data!: history_pengisianUpdateManyMutationInput

  @Field(() => history_pengisianWhereInput, { nullable: true })
  @Type(() => history_pengisianWhereInput)
  where?: history_pengisianWhereInput
}

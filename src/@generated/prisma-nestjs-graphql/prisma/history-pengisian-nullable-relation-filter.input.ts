import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { history_pengisianWhereInput } from '../history-pengisian/history-pengisian-where.input'

@InputType()
export class History_pengisianNullableRelationFilter {
  @Field(() => history_pengisianWhereInput, { nullable: true })
  is?: history_pengisianWhereInput

  @Field(() => history_pengisianWhereInput, { nullable: true })
  isNot?: history_pengisianWhereInput
}

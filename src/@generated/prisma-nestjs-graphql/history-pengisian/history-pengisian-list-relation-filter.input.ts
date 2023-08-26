import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HistoryPengisianWhereInput } from './history-pengisian-where.input'

@InputType()
export class HistoryPengisianListRelationFilter {
  @Field(() => HistoryPengisianWhereInput, { nullable: true })
  every?: HistoryPengisianWhereInput

  @Field(() => HistoryPengisianWhereInput, { nullable: true })
  some?: HistoryPengisianWhereInput

  @Field(() => HistoryPengisianWhereInput, { nullable: true })
  none?: HistoryPengisianWhereInput
}

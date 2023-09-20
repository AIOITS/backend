import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { BbmWhereInput } from './bbm-where.input'
import { StringFilter } from '../prisma/string-filter.input'
import { FloatFilter } from '../prisma/float-filter.input'
import { HistoryPengisianListRelationFilter } from '../history-pengisian/history-pengisian-list-relation-filter.input'

@InputType()
export class BbmWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => [BbmWhereInput], { nullable: true })
  AND?: Array<BbmWhereInput>

  @Field(() => [BbmWhereInput], { nullable: true })
  OR?: Array<BbmWhereInput>

  @Field(() => [BbmWhereInput], { nullable: true })
  NOT?: Array<BbmWhereInput>

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  type?: StringFilter

  @Field(() => FloatFilter, { nullable: true })
  price_per_liter?: FloatFilter

  @Field(() => HistoryPengisianListRelationFilter, { nullable: true })
  HistoryPengisian?: HistoryPengisianListRelationFilter
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input'

@InputType()
export class BbmScalarWhereWithAggregatesInput {
  @Field(() => [BbmScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<BbmScalarWhereWithAggregatesInput>

  @Field(() => [BbmScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<BbmScalarWhereWithAggregatesInput>

  @Field(() => [BbmScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<BbmScalarWhereWithAggregatesInput>

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  type?: StringWithAggregatesFilter

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  price_per_liter?: FloatWithAggregatesFilter
}

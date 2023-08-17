import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PKBWhereInput } from '../pkb/pkb-where.input'
import { Type } from 'class-transformer'
import { PKBOrderByWithAggregationInput } from '../pkb/pkb-order-by-with-aggregation.input'
import { PKBScalarFieldEnum } from '../pkb/pkb-scalar-field.enum'
import { PKBScalarWhereWithAggregatesInput } from '../pkb/pkb-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'

@ArgsType()
export class GroupByPkbArgs {
  @Field(() => PKBWhereInput, { nullable: true })
  @Type(() => PKBWhereInput)
  where?: PKBWhereInput

  @Field(() => [PKBOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<PKBOrderByWithAggregationInput>

  @Field(() => [PKBScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof PKBScalarFieldEnum>

  @Field(() => PKBScalarWhereWithAggregatesInput, { nullable: true })
  having?: PKBScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number
}

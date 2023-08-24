import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ajuan_subsidiWhereInput } from '../ajuan-subsidi/ajuan-subsidi-where.input'
import { Type } from 'class-transformer'
import { ajuan_subsidiOrderByWithAggregationInput } from '../ajuan-subsidi/ajuan-subsidi-order-by-with-aggregation.input'
import { Ajuan_subsidiScalarFieldEnum } from './ajuan-subsidi-scalar-field.enum'
import { ajuan_subsidiScalarWhereWithAggregatesInput } from '../ajuan-subsidi/ajuan-subsidi-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'

@ArgsType()
export class GroupByajuanSubsidiArgs {
  @Field(() => ajuan_subsidiWhereInput, { nullable: true })
  @Type(() => ajuan_subsidiWhereInput)
  where?: ajuan_subsidiWhereInput

  @Field(() => [ajuan_subsidiOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ajuan_subsidiOrderByWithAggregationInput>

  @Field(() => [Ajuan_subsidiScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Ajuan_subsidiScalarFieldEnum>

  @Field(() => ajuan_subsidiScalarWhereWithAggregatesInput, { nullable: true })
  having?: ajuan_subsidiScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number
}

import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { BbmWhereInput } from './bbm-where.input'
import { Type } from 'class-transformer'
import { BbmOrderByWithRelationInput } from './bbm-order-by-with-relation.input'
import { Prisma } from '@prisma/client'
import { BbmWhereUniqueInput } from './bbm-where-unique.input'
import { Int } from '@nestjs/graphql'
import { BbmCountAggregateInput } from './bbm-count-aggregate.input'
import { BbmAvgAggregateInput } from './bbm-avg-aggregate.input'
import { BbmSumAggregateInput } from './bbm-sum-aggregate.input'
import { BbmMinAggregateInput } from './bbm-min-aggregate.input'
import { BbmMaxAggregateInput } from './bbm-max-aggregate.input'

@ArgsType()
export class BbmAggregateArgs {
  @Field(() => BbmWhereInput, { nullable: true })
  @Type(() => BbmWhereInput)
  where?: BbmWhereInput

  @Field(() => [BbmOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BbmOrderByWithRelationInput>

  @Field(() => BbmWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<BbmWhereUniqueInput, 'id'>

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => BbmCountAggregateInput, { nullable: true })
  _count?: BbmCountAggregateInput

  @Field(() => BbmAvgAggregateInput, { nullable: true })
  _avg?: BbmAvgAggregateInput

  @Field(() => BbmSumAggregateInput, { nullable: true })
  _sum?: BbmSumAggregateInput

  @Field(() => BbmMinAggregateInput, { nullable: true })
  _min?: BbmMinAggregateInput

  @Field(() => BbmMaxAggregateInput, { nullable: true })
  _max?: BbmMaxAggregateInput
}

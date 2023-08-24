import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { StnkWhereInput } from './stnk-where.input'
import { Type } from 'class-transformer'
import { StnkOrderByWithRelationInput } from './stnk-order-by-with-relation.input'
import { Prisma } from '@prisma/client'
import { StnkWhereUniqueInput } from './stnk-where-unique.input'
import { Int } from '@nestjs/graphql'
import { StnkCountAggregateInput } from './stnk-count-aggregate.input'
import { StnkMinAggregateInput } from './stnk-min-aggregate.input'
import { StnkMaxAggregateInput } from './stnk-max-aggregate.input'

@ArgsType()
export class StnkAggregateArgs {
  @Field(() => StnkWhereInput, { nullable: true })
  @Type(() => StnkWhereInput)
  where?: StnkWhereInput

  @Field(() => [StnkOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<StnkOrderByWithRelationInput>

  @Field(() => StnkWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    StnkWhereUniqueInput,
    'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'
  >

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => StnkCountAggregateInput, { nullable: true })
  _count?: StnkCountAggregateInput

  @Field(() => StnkMinAggregateInput, { nullable: true })
  _min?: StnkMinAggregateInput

  @Field(() => StnkMaxAggregateInput, { nullable: true })
  _max?: StnkMaxAggregateInput
}

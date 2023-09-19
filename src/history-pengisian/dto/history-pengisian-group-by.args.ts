import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { HistoryPengisianWhereInput } from '../../@generated/prisma-nestjs-graphql/history-pengisian/history-pengisian-where.input'
import { Type } from 'class-transformer'
import { HistoryPengisianOrderByWithAggregationInput } from '../../@generated/prisma-nestjs-graphql/history-pengisian/history-pengisian-order-by-with-aggregation.input'
import { HistoryPengisianScalarFieldEnum } from '../../@generated/prisma-nestjs-graphql/history-pengisian/history-pengisian-scalar-field.enum'
import { HistoryPengisianScalarWhereWithAggregatesInput } from '../../@generated/prisma-nestjs-graphql/history-pengisian/history-pengisian-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { HistoryPengisianCountAggregateInput } from '../../@generated/prisma-nestjs-graphql/history-pengisian/history-pengisian-count-aggregate.input'
import { HistoryPengisianAvgAggregateInput } from '../../@generated/prisma-nestjs-graphql/history-pengisian/history-pengisian-avg-aggregate.input'
import { HistoryPengisianSumAggregateInput } from '../../@generated/prisma-nestjs-graphql/history-pengisian/history-pengisian-sum-aggregate.input'
import { HistoryPengisianMinAggregateInput } from '../../@generated/prisma-nestjs-graphql/history-pengisian/history-pengisian-min-aggregate.input'
import { HistoryPengisianMaxAggregateInput } from '../../@generated/prisma-nestjs-graphql/history-pengisian/history-pengisian-max-aggregate.input'

@ArgsType()
export class HistoryPengisianGroupByArgs {
  @Field(() => HistoryPengisianWhereInput, { nullable: true })
  @Type(() => HistoryPengisianWhereInput)
  where?: HistoryPengisianWhereInput

  @Field(() => [HistoryPengisianOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy: Array<HistoryPengisianOrderByWithAggregationInput>

  @Field(() => [HistoryPengisianScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof HistoryPengisianScalarFieldEnum>

  @Field(() => HistoryPengisianScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: HistoryPengisianScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => HistoryPengisianCountAggregateInput, { nullable: true })
  _count?: HistoryPengisianCountAggregateInput

  @Field(() => HistoryPengisianAvgAggregateInput, { nullable: true })
  _avg?: HistoryPengisianAvgAggregateInput

  @Field(() => HistoryPengisianSumAggregateInput, { nullable: true })
  _sum?: HistoryPengisianSumAggregateInput

  @Field(() => HistoryPengisianMinAggregateInput, { nullable: true })
  _min?: HistoryPengisianMinAggregateInput

  @Field(() => HistoryPengisianMaxAggregateInput, { nullable: true })
  _max?: HistoryPengisianMaxAggregateInput
}

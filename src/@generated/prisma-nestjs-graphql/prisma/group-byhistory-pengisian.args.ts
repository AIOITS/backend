import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { history_pengisianWhereInput } from '../history-pengisian/history-pengisian-where.input'
import { Type } from 'class-transformer'
import { history_pengisianOrderByWithAggregationInput } from '../history-pengisian/history-pengisian-order-by-with-aggregation.input'
import { History_pengisianScalarFieldEnum } from './history-pengisian-scalar-field.enum'
import { history_pengisianScalarWhereWithAggregatesInput } from '../history-pengisian/history-pengisian-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'

@ArgsType()
export class GroupByhistoryPengisianArgs {
  @Field(() => history_pengisianWhereInput, { nullable: true })
  @Type(() => history_pengisianWhereInput)
  where?: history_pengisianWhereInput

  @Field(() => [history_pengisianOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<history_pengisianOrderByWithAggregationInput>

  @Field(() => [History_pengisianScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof History_pengisianScalarFieldEnum>

  @Field(() => history_pengisianScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: history_pengisianScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number
}

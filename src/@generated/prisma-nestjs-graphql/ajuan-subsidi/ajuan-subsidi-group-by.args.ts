import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { AjuanSubsidiWhereInput } from './ajuan-subsidi-where.input'
import { Type } from 'class-transformer'
import { AjuanSubsidiOrderByWithAggregationInput } from './ajuan-subsidi-order-by-with-aggregation.input'
import { AjuanSubsidiScalarFieldEnum } from './ajuan-subsidi-scalar-field.enum'
import { AjuanSubsidiScalarWhereWithAggregatesInput } from './ajuan-subsidi-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { AjuanSubsidiCountAggregateInput } from './ajuan-subsidi-count-aggregate.input'
import { AjuanSubsidiAvgAggregateInput } from './ajuan-subsidi-avg-aggregate.input'
import { AjuanSubsidiSumAggregateInput } from './ajuan-subsidi-sum-aggregate.input'
import { AjuanSubsidiMinAggregateInput } from './ajuan-subsidi-min-aggregate.input'
import { AjuanSubsidiMaxAggregateInput } from './ajuan-subsidi-max-aggregate.input'

@ArgsType()
export class AjuanSubsidiGroupByArgs {
  @Field(() => AjuanSubsidiWhereInput, { nullable: true })
  @Type(() => AjuanSubsidiWhereInput)
  where?: AjuanSubsidiWhereInput

  @Field(() => [AjuanSubsidiOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<AjuanSubsidiOrderByWithAggregationInput>

  @Field(() => [AjuanSubsidiScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof AjuanSubsidiScalarFieldEnum>

  @Field(() => AjuanSubsidiScalarWhereWithAggregatesInput, { nullable: true })
  having?: AjuanSubsidiScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => AjuanSubsidiCountAggregateInput, { nullable: true })
  _count?: AjuanSubsidiCountAggregateInput

  @Field(() => AjuanSubsidiAvgAggregateInput, { nullable: true })
  _avg?: AjuanSubsidiAvgAggregateInput

  @Field(() => AjuanSubsidiSumAggregateInput, { nullable: true })
  _sum?: AjuanSubsidiSumAggregateInput

  @Field(() => AjuanSubsidiMinAggregateInput, { nullable: true })
  _min?: AjuanSubsidiMinAggregateInput

  @Field(() => AjuanSubsidiMaxAggregateInput, { nullable: true })
  _max?: AjuanSubsidiMaxAggregateInput
}

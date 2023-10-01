import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HistoryPengisianWhereInput } from './history-pengisian-where.input';
import { Type } from 'class-transformer';
import { HistoryPengisianOrderByWithAggregationInput } from './history-pengisian-order-by-with-aggregation.input';
import { HistoryPengisianScalarFieldEnum } from './history-pengisian-scalar-field.enum';
import { HistoryPengisianScalarWhereWithAggregatesInput } from './history-pengisian-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HistoryPengisianCountAggregateInput } from './history-pengisian-count-aggregate.input';
import { HistoryPengisianAvgAggregateInput } from './history-pengisian-avg-aggregate.input';
import { HistoryPengisianSumAggregateInput } from './history-pengisian-sum-aggregate.input';
import { HistoryPengisianMinAggregateInput } from './history-pengisian-min-aggregate.input';
import { HistoryPengisianMaxAggregateInput } from './history-pengisian-max-aggregate.input';

@ArgsType()
export class HistoryPengisianGroupByArgs {

    @Field(() => HistoryPengisianWhereInput, {nullable:true})
    @Type(() => HistoryPengisianWhereInput)
    where?: HistoryPengisianWhereInput;

    @Field(() => [HistoryPengisianOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HistoryPengisianOrderByWithAggregationInput>;

    @Field(() => [HistoryPengisianScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HistoryPengisianScalarFieldEnum>;

    @Field(() => HistoryPengisianScalarWhereWithAggregatesInput, {nullable:true})
    having?: HistoryPengisianScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HistoryPengisianCountAggregateInput, {nullable:true})
    _count?: HistoryPengisianCountAggregateInput;

    @Field(() => HistoryPengisianAvgAggregateInput, {nullable:true})
    _avg?: HistoryPengisianAvgAggregateInput;

    @Field(() => HistoryPengisianSumAggregateInput, {nullable:true})
    _sum?: HistoryPengisianSumAggregateInput;

    @Field(() => HistoryPengisianMinAggregateInput, {nullable:true})
    _min?: HistoryPengisianMinAggregateInput;

    @Field(() => HistoryPengisianMaxAggregateInput, {nullable:true})
    _max?: HistoryPengisianMaxAggregateInput;
}

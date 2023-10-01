import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpbuWhereInput } from './spbu-where.input';
import { Type } from 'class-transformer';
import { SpbuOrderByWithAggregationInput } from './spbu-order-by-with-aggregation.input';
import { SpbuScalarFieldEnum } from './spbu-scalar-field.enum';
import { SpbuScalarWhereWithAggregatesInput } from './spbu-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SpbuCountAggregateInput } from './spbu-count-aggregate.input';
import { SpbuAvgAggregateInput } from './spbu-avg-aggregate.input';
import { SpbuSumAggregateInput } from './spbu-sum-aggregate.input';
import { SpbuMinAggregateInput } from './spbu-min-aggregate.input';
import { SpbuMaxAggregateInput } from './spbu-max-aggregate.input';

@ArgsType()
export class SpbuGroupByArgs {

    @Field(() => SpbuWhereInput, {nullable:true})
    @Type(() => SpbuWhereInput)
    where?: SpbuWhereInput;

    @Field(() => [SpbuOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SpbuOrderByWithAggregationInput>;

    @Field(() => [SpbuScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SpbuScalarFieldEnum>;

    @Field(() => SpbuScalarWhereWithAggregatesInput, {nullable:true})
    having?: SpbuScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SpbuCountAggregateInput, {nullable:true})
    _count?: SpbuCountAggregateInput;

    @Field(() => SpbuAvgAggregateInput, {nullable:true})
    _avg?: SpbuAvgAggregateInput;

    @Field(() => SpbuSumAggregateInput, {nullable:true})
    _sum?: SpbuSumAggregateInput;

    @Field(() => SpbuMinAggregateInput, {nullable:true})
    _min?: SpbuMinAggregateInput;

    @Field(() => SpbuMaxAggregateInput, {nullable:true})
    _max?: SpbuMaxAggregateInput;
}

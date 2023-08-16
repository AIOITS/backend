import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { STNKWhereInput } from '../stnk/stnk-where.input';
import { Type } from 'class-transformer';
import { STNKOrderByWithAggregationInput } from '../stnk/stnk-order-by-with-aggregation.input';
import { STNKScalarFieldEnum } from '../stnk/stnk-scalar-field.enum';
import { STNKScalarWhereWithAggregatesInput } from '../stnk/stnk-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByStnkArgs {

    @Field(() => STNKWhereInput, {nullable:true})
    @Type(() => STNKWhereInput)
    where?: STNKWhereInput;

    @Field(() => [STNKOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<STNKOrderByWithAggregationInput>;

    @Field(() => [STNKScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof STNKScalarFieldEnum>;

    @Field(() => STNKScalarWhereWithAggregatesInput, {nullable:true})
    having?: STNKScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KtpWhereInput } from './ktp-where.input';
import { Type } from 'class-transformer';
import { KtpOrderByWithAggregationInput } from './ktp-order-by-with-aggregation.input';
import { KtpScalarFieldEnum } from './ktp-scalar-field.enum';
import { KtpScalarWhereWithAggregatesInput } from './ktp-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { KtpCountAggregateInput } from './ktp-count-aggregate.input';
import { KtpAvgAggregateInput } from './ktp-avg-aggregate.input';
import { KtpSumAggregateInput } from './ktp-sum-aggregate.input';
import { KtpMinAggregateInput } from './ktp-min-aggregate.input';
import { KtpMaxAggregateInput } from './ktp-max-aggregate.input';

@ArgsType()
export class KtpGroupByArgs {

    @Field(() => KtpWhereInput, {nullable:true})
    @Type(() => KtpWhereInput)
    where?: KtpWhereInput;

    @Field(() => [KtpOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<KtpOrderByWithAggregationInput>;

    @Field(() => [KtpScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof KtpScalarFieldEnum>;

    @Field(() => KtpScalarWhereWithAggregatesInput, {nullable:true})
    having?: KtpScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => KtpCountAggregateInput, {nullable:true})
    _count?: KtpCountAggregateInput;

    @Field(() => KtpAvgAggregateInput, {nullable:true})
    _avg?: KtpAvgAggregateInput;

    @Field(() => KtpSumAggregateInput, {nullable:true})
    _sum?: KtpSumAggregateInput;

    @Field(() => KtpMinAggregateInput, {nullable:true})
    _min?: KtpMinAggregateInput;

    @Field(() => KtpMaxAggregateInput, {nullable:true})
    _max?: KtpMaxAggregateInput;
}

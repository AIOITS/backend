import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SimWhereInput } from './sim-where.input';
import { Type } from 'class-transformer';
import { SimOrderByWithRelationInput } from './sim-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SimWhereUniqueInput } from './sim-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SimCountAggregateInput } from './sim-count-aggregate.input';
import { SimAvgAggregateInput } from './sim-avg-aggregate.input';
import { SimSumAggregateInput } from './sim-sum-aggregate.input';
import { SimMinAggregateInput } from './sim-min-aggregate.input';
import { SimMaxAggregateInput } from './sim-max-aggregate.input';

@ArgsType()
export class SimAggregateArgs {

    @Field(() => SimWhereInput, {nullable:true})
    @Type(() => SimWhereInput)
    where?: SimWhereInput;

    @Field(() => [SimOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SimOrderByWithRelationInput>;

    @Field(() => SimWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SimCountAggregateInput, {nullable:true})
    _count?: SimCountAggregateInput;

    @Field(() => SimAvgAggregateInput, {nullable:true})
    _avg?: SimAvgAggregateInput;

    @Field(() => SimSumAggregateInput, {nullable:true})
    _sum?: SimSumAggregateInput;

    @Field(() => SimMinAggregateInput, {nullable:true})
    _min?: SimMinAggregateInput;

    @Field(() => SimMaxAggregateInput, {nullable:true})
    _max?: SimMaxAggregateInput;
}

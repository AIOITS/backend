import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KtpWhereInput } from './ktp-where.input';
import { Type } from 'class-transformer';
import { KtpOrderByWithRelationInput } from './ktp-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { KtpWhereUniqueInput } from './ktp-where-unique.input';
import { Int } from '@nestjs/graphql';
import { KtpCountAggregateInput } from './ktp-count-aggregate.input';
import { KtpAvgAggregateInput } from './ktp-avg-aggregate.input';
import { KtpSumAggregateInput } from './ktp-sum-aggregate.input';
import { KtpMinAggregateInput } from './ktp-min-aggregate.input';
import { KtpMaxAggregateInput } from './ktp-max-aggregate.input';

@ArgsType()
export class KtpAggregateArgs {

    @Field(() => KtpWhereInput, {nullable:true})
    @Type(() => KtpWhereInput)
    where?: KtpWhereInput;

    @Field(() => [KtpOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<KtpOrderByWithRelationInput>;

    @Field(() => KtpWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>;

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

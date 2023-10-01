import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HistoryPengisianWhereInput } from './history-pengisian-where.input';
import { Type } from 'class-transformer';
import { HistoryPengisianOrderByWithRelationInput } from './history-pengisian-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HistoryPengisianCountAggregateInput } from './history-pengisian-count-aggregate.input';
import { HistoryPengisianAvgAggregateInput } from './history-pengisian-avg-aggregate.input';
import { HistoryPengisianSumAggregateInput } from './history-pengisian-sum-aggregate.input';
import { HistoryPengisianMinAggregateInput } from './history-pengisian-min-aggregate.input';
import { HistoryPengisianMaxAggregateInput } from './history-pengisian-max-aggregate.input';

@ArgsType()
export class HistoryPengisianAggregateArgs {

    @Field(() => HistoryPengisianWhereInput, {nullable:true})
    @Type(() => HistoryPengisianWhereInput)
    where?: HistoryPengisianWhereInput;

    @Field(() => [HistoryPengisianOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HistoryPengisianOrderByWithRelationInput>;

    @Field(() => HistoryPengisianWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>;

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

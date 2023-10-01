import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpbuWhereInput } from './spbu-where.input';
import { Type } from 'class-transformer';
import { SpbuOrderByWithRelationInput } from './spbu-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SpbuWhereUniqueInput } from './spbu-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SpbuCountAggregateInput } from './spbu-count-aggregate.input';
import { SpbuAvgAggregateInput } from './spbu-avg-aggregate.input';
import { SpbuSumAggregateInput } from './spbu-sum-aggregate.input';
import { SpbuMinAggregateInput } from './spbu-min-aggregate.input';
import { SpbuMaxAggregateInput } from './spbu-max-aggregate.input';

@ArgsType()
export class SpbuAggregateArgs {

    @Field(() => SpbuWhereInput, {nullable:true})
    @Type(() => SpbuWhereInput)
    where?: SpbuWhereInput;

    @Field(() => [SpbuOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SpbuOrderByWithRelationInput>;

    @Field(() => SpbuWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SpbuWhereUniqueInput, 'id'>;

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

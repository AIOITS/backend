import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AjuanSubsidiWhereInput } from './ajuan-subsidi-where.input';
import { Type } from 'class-transformer';
import { AjuanSubsidiOrderByWithRelationInput } from './ajuan-subsidi-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AjuanSubsidiCountAggregateInput } from './ajuan-subsidi-count-aggregate.input';
import { AjuanSubsidiAvgAggregateInput } from './ajuan-subsidi-avg-aggregate.input';
import { AjuanSubsidiSumAggregateInput } from './ajuan-subsidi-sum-aggregate.input';
import { AjuanSubsidiMinAggregateInput } from './ajuan-subsidi-min-aggregate.input';
import { AjuanSubsidiMaxAggregateInput } from './ajuan-subsidi-max-aggregate.input';

@ArgsType()
export class AjuanSubsidiAggregateArgs {

    @Field(() => AjuanSubsidiWhereInput, {nullable:true})
    @Type(() => AjuanSubsidiWhereInput)
    where?: AjuanSubsidiWhereInput;

    @Field(() => [AjuanSubsidiOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AjuanSubsidiOrderByWithRelationInput>;

    @Field(() => AjuanSubsidiWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AjuanSubsidiCountAggregateInput, {nullable:true})
    _count?: AjuanSubsidiCountAggregateInput;

    @Field(() => AjuanSubsidiAvgAggregateInput, {nullable:true})
    _avg?: AjuanSubsidiAvgAggregateInput;

    @Field(() => AjuanSubsidiSumAggregateInput, {nullable:true})
    _sum?: AjuanSubsidiSumAggregateInput;

    @Field(() => AjuanSubsidiMinAggregateInput, {nullable:true})
    _min?: AjuanSubsidiMinAggregateInput;

    @Field(() => AjuanSubsidiMaxAggregateInput, {nullable:true})
    _max?: AjuanSubsidiMaxAggregateInput;
}

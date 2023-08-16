import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SIMWhereInput } from '../sim/sim-where.input';
import { Type } from 'class-transformer';
import { SIMOrderByWithRelationInput } from '../sim/sim-order-by-with-relation.input';
import { SIMWhereUniqueInput } from '../sim/sim-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SIMScalarFieldEnum } from '../sim/sim-scalar-field.enum';

@ArgsType()
export class FindManySimArgs {

    @Field(() => SIMWhereInput, {nullable:true})
    @Type(() => SIMWhereInput)
    where?: SIMWhereInput;

    @Field(() => [SIMOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SIMOrderByWithRelationInput>;

    @Field(() => SIMWhereUniqueInput, {nullable:true})
    cursor?: SIMWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SIMScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SIMScalarFieldEnum>;
}

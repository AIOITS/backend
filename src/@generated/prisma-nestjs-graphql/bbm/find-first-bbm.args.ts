import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BbmWhereInput } from './bbm-where.input';
import { Type } from 'class-transformer';
import { BbmOrderByWithRelationInput } from './bbm-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BbmWhereUniqueInput } from './bbm-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BbmScalarFieldEnum } from './bbm-scalar-field.enum';

@ArgsType()
export class FindFirstBbmArgs {

    @Field(() => BbmWhereInput, {nullable:true})
    @Type(() => BbmWhereInput)
    where?: BbmWhereInput;

    @Field(() => [BbmOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BbmOrderByWithRelationInput>;

    @Field(() => BbmWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BbmWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BbmScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BbmScalarFieldEnum>;
}

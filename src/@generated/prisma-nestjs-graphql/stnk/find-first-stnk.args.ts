import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StnkWhereInput } from './stnk-where.input';
import { Type } from 'class-transformer';
import { StnkOrderByWithRelationInput } from './stnk-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { StnkWhereUniqueInput } from './stnk-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StnkScalarFieldEnum } from './stnk-scalar-field.enum';

@ArgsType()
export class FindFirstStnkArgs {

    @Field(() => StnkWhereInput, {nullable:true})
    @Type(() => StnkWhereInput)
    where?: StnkWhereInput;

    @Field(() => [StnkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StnkOrderByWithRelationInput>;

    @Field(() => StnkWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StnkWhereUniqueInput, 'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StnkScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StnkScalarFieldEnum>;
}

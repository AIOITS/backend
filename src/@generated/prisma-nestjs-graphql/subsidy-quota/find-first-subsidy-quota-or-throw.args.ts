import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyQuotaWhereInput } from './subsidy-quota-where.input';
import { Type } from 'class-transformer';
import { SubsidyQuotaOrderByWithRelationInput } from './subsidy-quota-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubsidyQuotaWhereUniqueInput } from './subsidy-quota-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubsidyQuotaScalarFieldEnum } from './subsidy-quota-scalar-field.enum';

@ArgsType()
export class FindFirstSubsidyQuotaOrThrowArgs {

    @Field(() => SubsidyQuotaWhereInput, {nullable:true})
    @Type(() => SubsidyQuotaWhereInput)
    where?: SubsidyQuotaWhereInput;

    @Field(() => [SubsidyQuotaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubsidyQuotaOrderByWithRelationInput>;

    @Field(() => SubsidyQuotaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubsidyQuotaWhereUniqueInput, 'id' | 'nomor_stnk'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubsidyQuotaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubsidyQuotaScalarFieldEnum>;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyQuotaWhereUniqueInput } from './subsidy-quota-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSubsidyQuotaArgs {

    @Field(() => SubsidyQuotaWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyQuotaWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyQuotaWhereUniqueInput, 'id' | 'nomor_stnk'>;
}

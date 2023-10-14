import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyQuotaUpdateInput } from './subsidy-quota-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SubsidyQuotaWhereUniqueInput } from './subsidy-quota-where-unique.input';

@ArgsType()
export class UpdateOneSubsidyQuotaArgs {

    @Field(() => SubsidyQuotaUpdateInput, {nullable:false})
    @Type(() => SubsidyQuotaUpdateInput)
    data!: SubsidyQuotaUpdateInput;

    @Field(() => SubsidyQuotaWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyQuotaWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyQuotaWhereUniqueInput, 'id' | 'nomor_stnk'>;
}

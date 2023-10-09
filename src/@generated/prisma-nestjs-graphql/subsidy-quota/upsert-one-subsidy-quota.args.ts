import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyQuotaWhereUniqueInput } from './subsidy-quota-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyQuotaCreateInput } from './subsidy-quota-create.input';
import { SubsidyQuotaUpdateInput } from './subsidy-quota-update.input';

@ArgsType()
export class UpsertOneSubsidyQuotaArgs {

    @Field(() => SubsidyQuotaWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyQuotaWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyQuotaWhereUniqueInput, 'id' | 'nomor_stnk'>;

    @Field(() => SubsidyQuotaCreateInput, {nullable:false})
    @Type(() => SubsidyQuotaCreateInput)
    create!: SubsidyQuotaCreateInput;

    @Field(() => SubsidyQuotaUpdateInput, {nullable:false})
    @Type(() => SubsidyQuotaUpdateInput)
    update!: SubsidyQuotaUpdateInput;
}

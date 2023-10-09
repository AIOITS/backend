import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyQuotaWhereUniqueInput } from './subsidy-quota-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyQuotaCreateWithoutStnkInput } from './subsidy-quota-create-without-stnk.input';

@InputType()
export class SubsidyQuotaCreateOrConnectWithoutStnkInput {

    @Field(() => SubsidyQuotaWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyQuotaWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyQuotaWhereUniqueInput, 'id' | 'nomor_stnk'>;

    @Field(() => SubsidyQuotaCreateWithoutStnkInput, {nullable:false})
    @Type(() => SubsidyQuotaCreateWithoutStnkInput)
    create!: SubsidyQuotaCreateWithoutStnkInput;
}

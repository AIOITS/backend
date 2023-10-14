import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyQuotaCreateWithoutStnkInput } from './subsidy-quota-create-without-stnk.input';
import { Type } from 'class-transformer';
import { SubsidyQuotaCreateOrConnectWithoutStnkInput } from './subsidy-quota-create-or-connect-without-stnk.input';
import { Prisma } from '@prisma/client';
import { SubsidyQuotaWhereUniqueInput } from './subsidy-quota-where-unique.input';

@InputType()
export class SubsidyQuotaCreateNestedOneWithoutStnkInput {

    @Field(() => SubsidyQuotaCreateWithoutStnkInput, {nullable:true})
    @Type(() => SubsidyQuotaCreateWithoutStnkInput)
    create?: SubsidyQuotaCreateWithoutStnkInput;

    @Field(() => SubsidyQuotaCreateOrConnectWithoutStnkInput, {nullable:true})
    @Type(() => SubsidyQuotaCreateOrConnectWithoutStnkInput)
    connectOrCreate?: SubsidyQuotaCreateOrConnectWithoutStnkInput;

    @Field(() => SubsidyQuotaWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyQuotaWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyQuotaWhereUniqueInput, 'id' | 'nomor_stnk'>;
}

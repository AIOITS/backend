import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyQuotaCreateWithoutStnkInput } from './subsidy-quota-create-without-stnk.input';
import { Type } from 'class-transformer';
import { SubsidyQuotaCreateOrConnectWithoutStnkInput } from './subsidy-quota-create-or-connect-without-stnk.input';
import { SubsidyQuotaUpsertWithoutStnkInput } from './subsidy-quota-upsert-without-stnk.input';
import { SubsidyQuotaWhereInput } from './subsidy-quota-where.input';
import { Prisma } from '@prisma/client';
import { SubsidyQuotaWhereUniqueInput } from './subsidy-quota-where-unique.input';
import { SubsidyQuotaUpdateToOneWithWhereWithoutStnkInput } from './subsidy-quota-update-to-one-with-where-without-stnk.input';

@InputType()
export class SubsidyQuotaUncheckedUpdateOneWithoutStnkNestedInput {

    @Field(() => SubsidyQuotaCreateWithoutStnkInput, {nullable:true})
    @Type(() => SubsidyQuotaCreateWithoutStnkInput)
    create?: SubsidyQuotaCreateWithoutStnkInput;

    @Field(() => SubsidyQuotaCreateOrConnectWithoutStnkInput, {nullable:true})
    @Type(() => SubsidyQuotaCreateOrConnectWithoutStnkInput)
    connectOrCreate?: SubsidyQuotaCreateOrConnectWithoutStnkInput;

    @Field(() => SubsidyQuotaUpsertWithoutStnkInput, {nullable:true})
    @Type(() => SubsidyQuotaUpsertWithoutStnkInput)
    upsert?: SubsidyQuotaUpsertWithoutStnkInput;

    @Field(() => SubsidyQuotaWhereInput, {nullable:true})
    @Type(() => SubsidyQuotaWhereInput)
    disconnect?: SubsidyQuotaWhereInput;

    @Field(() => SubsidyQuotaWhereInput, {nullable:true})
    @Type(() => SubsidyQuotaWhereInput)
    delete?: SubsidyQuotaWhereInput;

    @Field(() => SubsidyQuotaWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyQuotaWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyQuotaWhereUniqueInput, 'id' | 'nomor_stnk'>;

    @Field(() => SubsidyQuotaUpdateToOneWithWhereWithoutStnkInput, {nullable:true})
    @Type(() => SubsidyQuotaUpdateToOneWithWhereWithoutStnkInput)
    update?: SubsidyQuotaUpdateToOneWithWhereWithoutStnkInput;
}

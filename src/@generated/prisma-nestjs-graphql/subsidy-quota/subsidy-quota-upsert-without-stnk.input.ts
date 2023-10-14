import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyQuotaUpdateWithoutStnkInput } from './subsidy-quota-update-without-stnk.input';
import { Type } from 'class-transformer';
import { SubsidyQuotaCreateWithoutStnkInput } from './subsidy-quota-create-without-stnk.input';
import { SubsidyQuotaWhereInput } from './subsidy-quota-where.input';

@InputType()
export class SubsidyQuotaUpsertWithoutStnkInput {

    @Field(() => SubsidyQuotaUpdateWithoutStnkInput, {nullable:false})
    @Type(() => SubsidyQuotaUpdateWithoutStnkInput)
    update!: SubsidyQuotaUpdateWithoutStnkInput;

    @Field(() => SubsidyQuotaCreateWithoutStnkInput, {nullable:false})
    @Type(() => SubsidyQuotaCreateWithoutStnkInput)
    create!: SubsidyQuotaCreateWithoutStnkInput;

    @Field(() => SubsidyQuotaWhereInput, {nullable:true})
    @Type(() => SubsidyQuotaWhereInput)
    where?: SubsidyQuotaWhereInput;
}

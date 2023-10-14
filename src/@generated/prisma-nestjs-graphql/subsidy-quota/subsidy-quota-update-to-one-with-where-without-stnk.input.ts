import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyQuotaWhereInput } from './subsidy-quota-where.input';
import { Type } from 'class-transformer';
import { SubsidyQuotaUpdateWithoutStnkInput } from './subsidy-quota-update-without-stnk.input';

@InputType()
export class SubsidyQuotaUpdateToOneWithWhereWithoutStnkInput {

    @Field(() => SubsidyQuotaWhereInput, {nullable:true})
    @Type(() => SubsidyQuotaWhereInput)
    where?: SubsidyQuotaWhereInput;

    @Field(() => SubsidyQuotaUpdateWithoutStnkInput, {nullable:false})
    @Type(() => SubsidyQuotaUpdateWithoutStnkInput)
    data!: SubsidyQuotaUpdateWithoutStnkInput;
}

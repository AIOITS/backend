import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyQuotaWhereInput } from './subsidy-quota-where.input';

@InputType()
export class SubsidyQuotaNullableRelationFilter {

    @Field(() => SubsidyQuotaWhereInput, {nullable:true})
    is?: SubsidyQuotaWhereInput;

    @Field(() => SubsidyQuotaWhereInput, {nullable:true})
    isNot?: SubsidyQuotaWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyQuotaCreateInput } from './subsidy-quota-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubsidyQuotaArgs {

    @Field(() => SubsidyQuotaCreateInput, {nullable:false})
    @Type(() => SubsidyQuotaCreateInput)
    data!: SubsidyQuotaCreateInput;
}

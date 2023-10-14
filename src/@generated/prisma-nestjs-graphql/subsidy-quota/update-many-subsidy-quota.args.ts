import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyQuotaUpdateManyMutationInput } from './subsidy-quota-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubsidyQuotaWhereInput } from './subsidy-quota-where.input';

@ArgsType()
export class UpdateManySubsidyQuotaArgs {

    @Field(() => SubsidyQuotaUpdateManyMutationInput, {nullable:false})
    @Type(() => SubsidyQuotaUpdateManyMutationInput)
    data!: SubsidyQuotaUpdateManyMutationInput;

    @Field(() => SubsidyQuotaWhereInput, {nullable:true})
    @Type(() => SubsidyQuotaWhereInput)
    where?: SubsidyQuotaWhereInput;
}

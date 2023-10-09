import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyQuotaCreateManyInput } from './subsidy-quota-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySubsidyQuotaArgs {

    @Field(() => [SubsidyQuotaCreateManyInput], {nullable:false})
    @Type(() => SubsidyQuotaCreateManyInput)
    data!: Array<SubsidyQuotaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

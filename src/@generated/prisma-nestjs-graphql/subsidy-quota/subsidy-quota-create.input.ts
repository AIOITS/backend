import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { StnkCreateNestedOneWithoutSubsidy_quotaInput } from '../stnk/stnk-create-nested-one-without-subsidy-quota.input';

@InputType()
export class SubsidyQuotaCreateInput {

    @Field(() => Float, {nullable:true})
    quota?: number;

    @Field(() => StnkCreateNestedOneWithoutSubsidy_quotaInput, {nullable:false})
    stnk!: StnkCreateNestedOneWithoutSubsidy_quotaInput;
}

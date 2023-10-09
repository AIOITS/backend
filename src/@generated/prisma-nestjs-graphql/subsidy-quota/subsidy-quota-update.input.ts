import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { StnkUpdateOneRequiredWithoutSubsidy_quotaNestedInput } from '../stnk/stnk-update-one-required-without-subsidy-quota-nested.input';

@InputType()
export class SubsidyQuotaUpdateInput {

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    quota?: FloatFieldUpdateOperationsInput;

    @Field(() => StnkUpdateOneRequiredWithoutSubsidy_quotaNestedInput, {nullable:true})
    stnk?: StnkUpdateOneRequiredWithoutSubsidy_quotaNestedInput;
}

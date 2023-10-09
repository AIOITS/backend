import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';

@InputType()
export class SubsidyQuotaUpdateWithoutStnkInput {

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    quota?: FloatFieldUpdateOperationsInput;
}

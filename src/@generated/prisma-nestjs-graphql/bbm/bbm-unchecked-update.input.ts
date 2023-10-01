import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumBbmCategoryFieldUpdateOperationsInput } from '../prisma/enum-bbm-category-field-update-operations.input';
import { HistoryPengisianUncheckedUpdateManyWithoutBbmNestedInput } from '../history-pengisian/history-pengisian-unchecked-update-many-without-bbm-nested.input';

@InputType()
export class BbmUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price_per_liter?: FloatFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_subsidi?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumBbmCategoryFieldUpdateOperationsInput, {nullable:true})
    category?: EnumBbmCategoryFieldUpdateOperationsInput;

    @Field(() => HistoryPengisianUncheckedUpdateManyWithoutBbmNestedInput, {nullable:true})
    HistoryPengisian?: HistoryPengisianUncheckedUpdateManyWithoutBbmNestedInput;
}

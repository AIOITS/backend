import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BbmCategory } from './bbm-category.enum';

@InputType()
export class EnumBbmCategoryFieldUpdateOperationsInput {

    @Field(() => BbmCategory, {nullable:true})
    set?: keyof typeof BbmCategory;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BbmCategory } from './bbm-category.enum';

@InputType()
export class NestedEnumBbmCategoryFilter {

    @Field(() => BbmCategory, {nullable:true})
    equals?: keyof typeof BbmCategory;

    @Field(() => [BbmCategory], {nullable:true})
    in?: Array<keyof typeof BbmCategory>;

    @Field(() => [BbmCategory], {nullable:true})
    notIn?: Array<keyof typeof BbmCategory>;

    @Field(() => NestedEnumBbmCategoryFilter, {nullable:true})
    not?: NestedEnumBbmCategoryFilter;
}

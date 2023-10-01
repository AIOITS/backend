import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BbmCategory } from './bbm-category.enum';
import { NestedEnumBbmCategoryWithAggregatesFilter } from './nested-enum-bbm-category-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBbmCategoryFilter } from './nested-enum-bbm-category-filter.input';

@InputType()
export class EnumBbmCategoryWithAggregatesFilter {

    @Field(() => BbmCategory, {nullable:true})
    equals?: keyof typeof BbmCategory;

    @Field(() => [BbmCategory], {nullable:true})
    in?: Array<keyof typeof BbmCategory>;

    @Field(() => [BbmCategory], {nullable:true})
    notIn?: Array<keyof typeof BbmCategory>;

    @Field(() => NestedEnumBbmCategoryWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBbmCategoryWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBbmCategoryFilter, {nullable:true})
    _min?: NestedEnumBbmCategoryFilter;

    @Field(() => NestedEnumBbmCategoryFilter, {nullable:true})
    _max?: NestedEnumBbmCategoryFilter;
}

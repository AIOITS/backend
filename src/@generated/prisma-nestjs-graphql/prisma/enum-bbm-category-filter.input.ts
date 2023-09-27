import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BbmCategory } from './bbm-category.enum'
import { NestedEnumBbmCategoryFilter } from './nested-enum-bbm-category-filter.input'

@InputType()
export class EnumBbmCategoryFilter {
  @Field(() => BbmCategory, { nullable: true })
  equals?: keyof typeof BbmCategory;

  @Field(() => [BbmCategory], { nullable: true })
  in?: Array<keyof typeof BbmCategory>

  @Field(() => [BbmCategory], { nullable: true })
  notIn?: Array<keyof typeof BbmCategory>

  @Field(() => NestedEnumBbmCategoryFilter, { nullable: true })
  not?: NestedEnumBbmCategoryFilter
}

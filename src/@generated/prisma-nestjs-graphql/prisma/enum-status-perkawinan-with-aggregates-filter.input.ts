import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StatusPerkawinan } from './status-perkawinan.enum'
import { NestedEnumStatusPerkawinanWithAggregatesFilter } from './nested-enum-status-perkawinan-with-aggregates-filter.input'
import { NestedIntFilter } from './nested-int-filter.input'
import { NestedEnumStatusPerkawinanFilter } from './nested-enum-status-perkawinan-filter.input'

@InputType()
export class EnumStatusPerkawinanWithAggregatesFilter {
  @Field(() => StatusPerkawinan, { nullable: true })
  equals?: keyof typeof StatusPerkawinan;

  @Field(() => [StatusPerkawinan], { nullable: true })
  in?: Array<keyof typeof StatusPerkawinan>

  @Field(() => [StatusPerkawinan], { nullable: true })
  notIn?: Array<keyof typeof StatusPerkawinan>

  @Field(() => NestedEnumStatusPerkawinanWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumStatusPerkawinanWithAggregatesFilter

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter

  @Field(() => NestedEnumStatusPerkawinanFilter, { nullable: true })
  _min?: NestedEnumStatusPerkawinanFilter

  @Field(() => NestedEnumStatusPerkawinanFilter, { nullable: true })
  _max?: NestedEnumStatusPerkawinanFilter
}

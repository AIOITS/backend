import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StatusPerkawinan } from './status-perkawinan.enum'

@InputType()
export class NestedEnumStatusPerkawinanFilter {
  @Field(() => StatusPerkawinan, { nullable: true })
  equals?: keyof typeof StatusPerkawinan;

  @Field(() => [StatusPerkawinan], { nullable: true })
  in?: Array<keyof typeof StatusPerkawinan>

  @Field(() => [StatusPerkawinan], { nullable: true })
  notIn?: Array<keyof typeof StatusPerkawinan>

  @Field(() => NestedEnumStatusPerkawinanFilter, { nullable: true })
  not?: NestedEnumStatusPerkawinanFilter
}

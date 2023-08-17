import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Agama } from './agama.enum'

@InputType()
export class NestedEnumAgamaFilter {
  @Field(() => Agama, { nullable: true })
  equals?: keyof typeof Agama;

  @Field(() => [Agama], { nullable: true })
  in?: Array<keyof typeof Agama>

  @Field(() => [Agama], { nullable: true })
  notIn?: Array<keyof typeof Agama>

  @Field(() => NestedEnumAgamaFilter, { nullable: true })
  not?: NestedEnumAgamaFilter
}

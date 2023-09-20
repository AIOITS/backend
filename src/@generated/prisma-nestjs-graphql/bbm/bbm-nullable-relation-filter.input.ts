import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BbmWhereInput } from './bbm-where.input'

@InputType()
export class BbmNullableRelationFilter {
  @Field(() => BbmWhereInput, { nullable: true })
  is?: BbmWhereInput

  @Field(() => BbmWhereInput, { nullable: true })
  isNot?: BbmWhereInput
}

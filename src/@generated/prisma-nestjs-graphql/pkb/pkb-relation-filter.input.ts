import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PkbWhereInput } from './pkb-where.input'

@InputType()
export class PkbRelationFilter {
  @Field(() => PkbWhereInput, { nullable: true })
  is?: PkbWhereInput

  @Field(() => PkbWhereInput, { nullable: true })
  isNot?: PkbWhereInput
}

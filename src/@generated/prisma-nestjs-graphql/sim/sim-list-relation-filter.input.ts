import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SIMWhereInput } from './sim-where.input'

@InputType()
export class SIMListRelationFilter {
  @Field(() => SIMWhereInput, { nullable: true })
  every?: SIMWhereInput

  @Field(() => SIMWhereInput, { nullable: true })
  some?: SIMWhereInput

  @Field(() => SIMWhereInput, { nullable: true })
  none?: SIMWhereInput
}

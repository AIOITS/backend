import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StnkWhereInput } from './stnk-where.input'

@InputType()
export class StnkRelationFilter {
  @Field(() => StnkWhereInput, { nullable: true })
  is?: StnkWhereInput

  @Field(() => StnkWhereInput, { nullable: true })
  isNot?: StnkWhereInput
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StnkWhereInput } from './stnk-where.input'
import { Type } from 'class-transformer'
import { StnkUpdateWithoutPkbInput } from './stnk-update-without-pkb.input'

@InputType()
export class StnkUpdateToOneWithWhereWithoutPkbInput {
  @Field(() => StnkWhereInput, { nullable: true })
  @Type(() => StnkWhereInput)
  where?: StnkWhereInput

  @Field(() => StnkUpdateWithoutPkbInput, { nullable: false })
  @Type(() => StnkUpdateWithoutPkbInput)
  data!: StnkUpdateWithoutPkbInput
}

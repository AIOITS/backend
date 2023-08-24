import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StnkUpdateWithoutPkbInput } from './stnk-update-without-pkb.input'
import { Type } from 'class-transformer'
import { StnkCreateWithoutPkbInput } from './stnk-create-without-pkb.input'
import { StnkWhereInput } from './stnk-where.input'

@InputType()
export class StnkUpsertWithoutPkbInput {
  @Field(() => StnkUpdateWithoutPkbInput, { nullable: false })
  @Type(() => StnkUpdateWithoutPkbInput)
  update!: StnkUpdateWithoutPkbInput

  @Field(() => StnkCreateWithoutPkbInput, { nullable: false })
  @Type(() => StnkCreateWithoutPkbInput)
  create!: StnkCreateWithoutPkbInput

  @Field(() => StnkWhereInput, { nullable: true })
  @Type(() => StnkWhereInput)
  where?: StnkWhereInput
}

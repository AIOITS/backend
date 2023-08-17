import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { StnkCreateInput } from './stnk-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOneStnkArgs {
  @Field(() => StnkCreateInput, { nullable: false })
  @Type(() => StnkCreateInput)
  data!: StnkCreateInput
}

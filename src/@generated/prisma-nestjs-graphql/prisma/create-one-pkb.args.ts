import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PKBCreateInput } from '../pkb/pkb-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOnePkbArgs {
  @Field(() => PKBCreateInput, { nullable: false })
  @Type(() => PKBCreateInput)
  data!: PKBCreateInput
}

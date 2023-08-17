import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PKBWhereInput } from '../pkb/pkb-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyPkbArgs {
  @Field(() => PKBWhereInput, { nullable: true })
  @Type(() => PKBWhereInput)
  where?: PKBWhereInput
}

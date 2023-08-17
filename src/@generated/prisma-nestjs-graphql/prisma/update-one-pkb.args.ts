import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PKBUpdateInput } from '../pkb/pkb-update.input'
import { Type } from 'class-transformer'
import { PKBWhereUniqueInput } from '../pkb/pkb-where-unique.input'

@ArgsType()
export class UpdateOnePkbArgs {
  @Field(() => PKBUpdateInput, { nullable: false })
  @Type(() => PKBUpdateInput)
  data!: PKBUpdateInput

  @Field(() => PKBWhereUniqueInput, { nullable: false })
  @Type(() => PKBWhereUniqueInput)
  where!: PKBWhereUniqueInput
}

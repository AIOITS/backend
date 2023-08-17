import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PKBWhereUniqueInput } from '../pkb/pkb-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class FindUniquePkbOrThrowArgs {
  @Field(() => PKBWhereUniqueInput, { nullable: false })
  @Type(() => PKBWhereUniqueInput)
  where!: PKBWhereUniqueInput
}

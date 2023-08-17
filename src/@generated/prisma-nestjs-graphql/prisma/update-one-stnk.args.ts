import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { STNKUpdateInput } from '../stnk/stnk-update.input'
import { Type } from 'class-transformer'
import { STNKWhereUniqueInput } from '../stnk/stnk-where-unique.input'

@ArgsType()
export class UpdateOneStnkArgs {
  @Field(() => STNKUpdateInput, { nullable: false })
  @Type(() => STNKUpdateInput)
  data!: STNKUpdateInput

  @Field(() => STNKWhereUniqueInput, { nullable: false })
  @Type(() => STNKWhereUniqueInput)
  where!: STNKWhereUniqueInput
}

import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { STNKWhereUniqueInput } from '../stnk/stnk-where-unique.input'
import { Type } from 'class-transformer'
import { STNKCreateInput } from '../stnk/stnk-create.input'
import { STNKUpdateInput } from '../stnk/stnk-update.input'

@ArgsType()
export class UpsertOneStnkArgs {
  @Field(() => STNKWhereUniqueInput, { nullable: false })
  @Type(() => STNKWhereUniqueInput)
  where!: STNKWhereUniqueInput

  @Field(() => STNKCreateInput, { nullable: false })
  @Type(() => STNKCreateInput)
  create!: STNKCreateInput

  @Field(() => STNKUpdateInput, { nullable: false })
  @Type(() => STNKUpdateInput)
  update!: STNKUpdateInput
}

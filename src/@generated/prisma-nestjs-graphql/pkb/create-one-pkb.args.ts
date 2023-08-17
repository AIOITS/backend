import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PkbCreateInput } from './pkb-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOnePkbArgs {
  @Field(() => PkbCreateInput, { nullable: false })
  @Type(() => PkbCreateInput)
  data!: PkbCreateInput
}

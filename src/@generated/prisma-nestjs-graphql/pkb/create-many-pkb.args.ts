import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PkbCreateManyInput } from './pkb-create-many.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateManyPkbArgs {
  @Field(() => [PkbCreateManyInput], { nullable: false })
  @Type(() => PkbCreateManyInput)
  data!: Array<PkbCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

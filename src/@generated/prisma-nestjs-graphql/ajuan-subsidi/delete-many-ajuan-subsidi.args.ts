import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { AjuanSubsidiWhereInput } from './ajuan-subsidi-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyAjuanSubsidiArgs {
  @Field(() => AjuanSubsidiWhereInput, { nullable: true })
  @Type(() => AjuanSubsidiWhereInput)
  where?: AjuanSubsidiWhereInput
}

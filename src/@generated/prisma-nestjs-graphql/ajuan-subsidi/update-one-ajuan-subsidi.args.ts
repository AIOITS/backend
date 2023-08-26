import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { AjuanSubsidiUpdateInput } from './ajuan-subsidi-update.input'
import { Type } from 'class-transformer'
import { Prisma } from '@prisma/client'
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input'

@ArgsType()
export class UpdateOneAjuanSubsidiArgs {
  @Field(() => AjuanSubsidiUpdateInput, { nullable: false })
  @Type(() => AjuanSubsidiUpdateInput)
  data!: AjuanSubsidiUpdateInput

  @Field(() => AjuanSubsidiWhereUniqueInput, { nullable: false })
  @Type(() => AjuanSubsidiWhereUniqueInput)
  where!: Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input'
import { Type } from 'class-transformer'
import { AjuanSubsidiUpdateWithoutUserInput } from './ajuan-subsidi-update-without-user.input'

@InputType()
export class AjuanSubsidiUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => AjuanSubsidiWhereUniqueInput, { nullable: false })
  @Type(() => AjuanSubsidiWhereUniqueInput)
  where!: Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>

  @Field(() => AjuanSubsidiUpdateWithoutUserInput, { nullable: false })
  @Type(() => AjuanSubsidiUpdateWithoutUserInput)
  data!: AjuanSubsidiUpdateWithoutUserInput
}

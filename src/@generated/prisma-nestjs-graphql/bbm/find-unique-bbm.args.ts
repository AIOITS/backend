import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BbmWhereUniqueInput } from './bbm-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class FindUniqueBbmArgs {
  @Field(() => BbmWhereUniqueInput, { nullable: false })
  @Type(() => BbmWhereUniqueInput)
  where!: Prisma.AtLeast<BbmWhereUniqueInput, 'id'>
}

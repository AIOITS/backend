import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BbmWhereUniqueInput } from './bbm-where-unique.input'
import { Type } from 'class-transformer'
import { BbmCreateInput } from './bbm-create.input'
import { BbmUpdateInput } from './bbm-update.input'

@ArgsType()
export class UpsertOneBbmArgs {
  @Field(() => BbmWhereUniqueInput, { nullable: false })
  @Type(() => BbmWhereUniqueInput)
  where!: Prisma.AtLeast<BbmWhereUniqueInput, 'id'>

  @Field(() => BbmCreateInput, { nullable: false })
  @Type(() => BbmCreateInput)
  create!: BbmCreateInput

  @Field(() => BbmUpdateInput, { nullable: false })
  @Type(() => BbmUpdateInput)
  update!: BbmUpdateInput
}

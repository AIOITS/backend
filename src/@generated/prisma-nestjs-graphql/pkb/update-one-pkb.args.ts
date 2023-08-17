import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PkbUpdateInput } from './pkb-update.input'
import { Type } from 'class-transformer'
import { Prisma } from '@prisma/client'
import { PkbWhereUniqueInput } from './pkb-where-unique.input'

@ArgsType()
export class UpdateOnePkbArgs {
  @Field(() => PkbUpdateInput, { nullable: false })
  @Type(() => PkbUpdateInput)
  data!: PkbUpdateInput

  @Field(() => PkbWhereUniqueInput, { nullable: false })
  @Type(() => PkbWhereUniqueInput)
  where!: Prisma.AtLeast<PkbWhereUniqueInput, 'nomor_PKB'>
}

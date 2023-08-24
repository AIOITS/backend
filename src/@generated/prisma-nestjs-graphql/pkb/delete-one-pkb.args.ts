import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { PkbWhereUniqueInput } from './pkb-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteOnePkbArgs {
  @Field(() => PkbWhereUniqueInput, { nullable: false })
  @Type(() => PkbWhereUniqueInput)
  where!: Prisma.AtLeast<PkbWhereUniqueInput, 'nomor_pkb'>
}

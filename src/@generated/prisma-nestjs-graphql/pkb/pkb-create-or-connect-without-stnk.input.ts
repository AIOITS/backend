import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { PkbWhereUniqueInput } from './pkb-where-unique.input'
import { Type } from 'class-transformer'
import { PkbCreateWithoutStnkInput } from './pkb-create-without-stnk.input'

@InputType()
export class PkbCreateOrConnectWithoutStnkInput {
  @Field(() => PkbWhereUniqueInput, { nullable: false })
  @Type(() => PkbWhereUniqueInput)
  where!: Prisma.AtLeast<PkbWhereUniqueInput, 'nomor_pkb'>

  @Field(() => PkbCreateWithoutStnkInput, { nullable: false })
  @Type(() => PkbCreateWithoutStnkInput)
  create!: PkbCreateWithoutStnkInput
}

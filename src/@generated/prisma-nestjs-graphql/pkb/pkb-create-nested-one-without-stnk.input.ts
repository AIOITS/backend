import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PkbCreateWithoutStnkInput } from './pkb-create-without-stnk.input'
import { Type } from 'class-transformer'
import { PkbCreateOrConnectWithoutStnkInput } from './pkb-create-or-connect-without-stnk.input'
import { Prisma } from '@prisma/client'
import { PkbWhereUniqueInput } from './pkb-where-unique.input'

@InputType()
export class PkbCreateNestedOneWithoutStnkInput {
  @Field(() => PkbCreateWithoutStnkInput, { nullable: true })
  @Type(() => PkbCreateWithoutStnkInput)
  create?: PkbCreateWithoutStnkInput

  @Field(() => PkbCreateOrConnectWithoutStnkInput, { nullable: true })
  @Type(() => PkbCreateOrConnectWithoutStnkInput)
  connectOrCreate?: PkbCreateOrConnectWithoutStnkInput

  @Field(() => PkbWhereUniqueInput, { nullable: true })
  @Type(() => PkbWhereUniqueInput)
  connect?: Prisma.AtLeast<PkbWhereUniqueInput, 'nomor_pkb'>
}

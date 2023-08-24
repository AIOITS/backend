import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PkbCreateWithoutStnkInput } from './pkb-create-without-stnk.input'
import { Type } from 'class-transformer'
import { PkbCreateOrConnectWithoutStnkInput } from './pkb-create-or-connect-without-stnk.input'
import { PkbUpsertWithoutStnkInput } from './pkb-upsert-without-stnk.input'
import { Prisma } from '@prisma/client'
import { PkbWhereUniqueInput } from './pkb-where-unique.input'
import { PkbUpdateToOneWithWhereWithoutStnkInput } from './pkb-update-to-one-with-where-without-stnk.input'

@InputType()
export class PkbUpdateOneRequiredWithoutStnkNestedInput {
  @Field(() => PkbCreateWithoutStnkInput, { nullable: true })
  @Type(() => PkbCreateWithoutStnkInput)
  create?: PkbCreateWithoutStnkInput

  @Field(() => PkbCreateOrConnectWithoutStnkInput, { nullable: true })
  @Type(() => PkbCreateOrConnectWithoutStnkInput)
  connectOrCreate?: PkbCreateOrConnectWithoutStnkInput

  @Field(() => PkbUpsertWithoutStnkInput, { nullable: true })
  @Type(() => PkbUpsertWithoutStnkInput)
  upsert?: PkbUpsertWithoutStnkInput

  @Field(() => PkbWhereUniqueInput, { nullable: true })
  @Type(() => PkbWhereUniqueInput)
  connect?: Prisma.AtLeast<PkbWhereUniqueInput, 'nomor_pkb'>

  @Field(() => PkbUpdateToOneWithWhereWithoutStnkInput, { nullable: true })
  @Type(() => PkbUpdateToOneWithWhereWithoutStnkInput)
  update?: PkbUpdateToOneWithWhereWithoutStnkInput
}

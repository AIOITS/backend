import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { history_pengisianCreateWithoutStnkInput } from './history-pengisian-create-without-stnk.input'
import { Type } from 'class-transformer'
import { history_pengisianCreateOrConnectWithoutStnkInput } from './history-pengisian-create-or-connect-without-stnk.input'
import { history_pengisianUpsertWithoutStnkInput } from './history-pengisian-upsert-without-stnk.input'
import { history_pengisianWhereInput } from './history-pengisian-where.input'
import { Prisma } from '@prisma/client'
import { history_pengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { history_pengisianUpdateToOneWithWhereWithoutStnkInput } from './history-pengisian-update-to-one-with-where-without-stnk.input'

@InputType()
export class history_pengisianUncheckedUpdateOneWithoutStnkNestedInput {
  @Field(() => history_pengisianCreateWithoutStnkInput, { nullable: true })
  @Type(() => history_pengisianCreateWithoutStnkInput)
  create?: history_pengisianCreateWithoutStnkInput

  @Field(() => history_pengisianCreateOrConnectWithoutStnkInput, {
    nullable: true,
  })
  @Type(() => history_pengisianCreateOrConnectWithoutStnkInput)
  connectOrCreate?: history_pengisianCreateOrConnectWithoutStnkInput

  @Field(() => history_pengisianUpsertWithoutStnkInput, { nullable: true })
  @Type(() => history_pengisianUpsertWithoutStnkInput)
  upsert?: history_pengisianUpsertWithoutStnkInput

  @Field(() => history_pengisianWhereInput, { nullable: true })
  @Type(() => history_pengisianWhereInput)
  disconnect?: history_pengisianWhereInput

  @Field(() => history_pengisianWhereInput, { nullable: true })
  @Type(() => history_pengisianWhereInput)
  delete?: history_pengisianWhereInput

  @Field(() => history_pengisianWhereUniqueInput, { nullable: true })
  @Type(() => history_pengisianWhereUniqueInput)
  connect?: Prisma.AtLeast<
    history_pengisianWhereUniqueInput,
    'kategori_pengisian' | 'nomor_stnk'
  >

  @Field(() => history_pengisianUpdateToOneWithWhereWithoutStnkInput, {
    nullable: true,
  })
  @Type(() => history_pengisianUpdateToOneWithWhereWithoutStnkInput)
  update?: history_pengisianUpdateToOneWithWhereWithoutStnkInput
}

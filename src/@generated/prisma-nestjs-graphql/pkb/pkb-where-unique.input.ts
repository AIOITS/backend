import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PkbWhereInput } from './pkb-where.input'
import { BoolFilter } from '../prisma/bool-filter.input'
import { IntFilter } from '../prisma/int-filter.input'
import { StnkNullableRelationFilter } from '../stnk/stnk-nullable-relation-filter.input'

@InputType()
export class PkbWhereUniqueInput {
  @Field(() => String, { nullable: true })
  nomor_pkb?: string

  @Field(() => [PkbWhereInput], { nullable: true })
  AND?: Array<PkbWhereInput>

  @Field(() => [PkbWhereInput], { nullable: true })
  OR?: Array<PkbWhereInput>

  @Field(() => [PkbWhereInput], { nullable: true })
  NOT?: Array<PkbWhereInput>

  @Field(() => BoolFilter, { nullable: true })
  status_pajak?: BoolFilter

  @Field(() => IntFilter, { nullable: true })
  bbknb_pokok?: IntFilter

  @Field(() => IntFilter, { nullable: true })
  bbknb_sanksi?: IntFilter

  @Field(() => IntFilter, { nullable: true })
  PKB_pokok?: IntFilter

  @Field(() => IntFilter, { nullable: true })
  PKB_sanksi?: IntFilter

  @Field(() => IntFilter, { nullable: true })
  swdkllj_pokok?: IntFilter

  @Field(() => IntFilter, { nullable: true })
  swdkllj_sanksi?: IntFilter

  @Field(() => IntFilter, { nullable: true })
  administrasi_stnk_pokok?: IntFilter

  @Field(() => IntFilter, { nullable: true })
  administrasi_stnk_sanksi?: IntFilter

  @Field(() => IntFilter, { nullable: true })
  administrasi_tnkb_pokok?: IntFilter

  @Field(() => IntFilter, { nullable: true })
  administrasi_tnkb_sanksi?: IntFilter

  @Field(() => StnkNullableRelationFilter, { nullable: true })
  stnk?: StnkNullableRelationFilter
}

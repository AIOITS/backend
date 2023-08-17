import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFilter } from '../prisma/int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { SIMListRelationFilter } from '../sim/sim-list-relation-filter.input'
import { KTPRelationFilter } from '../ktp/ktp-relation-filter.input'

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>

  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>

  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  nik?: StringFilter

  @Field(() => StringNullableListFilter, { nullable: true })
  name?: StringNullableListFilter

  @Field(() => StringNullableFilter, { nullable: true })
  email?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  phone?: StringNullableFilter

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter

  @Field(() => IntFilter, { nullable: true })
  role?: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => SIMListRelationFilter, { nullable: true })
  nomor_sim?: SIMListRelationFilter

  @Field(() => KTPRelationFilter, { nullable: true })
  ktp?: KTPRelationFilter
}

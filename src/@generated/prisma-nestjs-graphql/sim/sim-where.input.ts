import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { IntFilter } from '../prisma/int-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { IntNullableFilter } from '../prisma/int-nullable-filter.input'
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input'

@InputType()
export class SIMWhereInput {
  @Field(() => [SIMWhereInput], { nullable: true })
  AND?: Array<SIMWhereInput>

  @Field(() => [SIMWhereInput], { nullable: true })
  OR?: Array<SIMWhereInput>

  @Field(() => [SIMWhereInput], { nullable: true })
  NOT?: Array<SIMWhereInput>

  @Field(() => StringFilter, { nullable: true })
  nomor_sim?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  nama?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  alamat?: StringFilter

  @Field(() => IntFilter, { nullable: true })
  rt?: IntFilter

  @Field(() => IntFilter, { nullable: true })
  rw?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  kelurahan_desa?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  kecamatan?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  kabupaten?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  pekerjaan?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  kabupaten_terbit?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  tanggal_terbit?: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  penerbit?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  berlaku_sampai?: DateTimeFilter

  @Field(() => IntNullableFilter, { nullable: true })
  userId?: IntNullableFilter

  @Field(() => UserNullableRelationFilter, { nullable: true })
  User?: UserNullableRelationFilter
}

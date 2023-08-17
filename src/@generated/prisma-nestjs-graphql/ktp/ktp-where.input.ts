import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { IntFilter } from '../prisma/int-filter.input'
import { EnumGolonganDarahFilter } from '../prisma/enum-golongan-darah-filter.input'
import { EnumAgamaFilter } from '../prisma/enum-agama-filter.input'
import { EnumStatusPerkawinanFilter } from '../prisma/enum-status-perkawinan-filter.input'
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input'

@InputType()
export class KtpWhereInput {
  @Field(() => [KtpWhereInput], { nullable: true })
  AND?: Array<KtpWhereInput>

  @Field(() => [KtpWhereInput], { nullable: true })
  OR?: Array<KtpWhereInput>

  @Field(() => [KtpWhereInput], { nullable: true })
  NOT?: Array<KtpWhereInput>

  @Field(() => StringFilter, { nullable: true })
  nik?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  nama?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  tempat_lahir?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  tanggal_lahir?: DateTimeFilter

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
  kabupaten_kota?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  provinsi?: StringFilter

  @Field(() => EnumGolonganDarahFilter, { nullable: true })
  golongan_darah?: EnumGolonganDarahFilter

  @Field(() => EnumAgamaFilter, { nullable: true })
  agama?: EnumAgamaFilter

  @Field(() => EnumStatusPerkawinanFilter, { nullable: true })
  status_perkawinan?: EnumStatusPerkawinanFilter

  @Field(() => StringFilter, { nullable: true })
  pekerjaan?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  kewarganegaraan?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  tanggal_terbit?: DateTimeFilter

  @Field(() => UserNullableRelationFilter, { nullable: true })
  User?: UserNullableRelationFilter
}

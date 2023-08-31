import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input'
import { EnumJenisKelaminWithAggregatesFilter } from '../prisma/enum-jenis-kelamin-with-aggregates-filter.input'
import { EnumGolonganDarahWithAggregatesFilter } from '../prisma/enum-golongan-darah-with-aggregates-filter.input'
import { EnumAgamaWithAggregatesFilter } from '../prisma/enum-agama-with-aggregates-filter.input'
import { EnumStatusPerkawinanWithAggregatesFilter } from '../prisma/enum-status-perkawinan-with-aggregates-filter.input'

@InputType()
export class KtpScalarWhereWithAggregatesInput {
  @Field(() => [KtpScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<KtpScalarWhereWithAggregatesInput>

  @Field(() => [KtpScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<KtpScalarWhereWithAggregatesInput>

  @Field(() => [KtpScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<KtpScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nik?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nama?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  tempat_lahir?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  tanggal_lahir?: DateTimeWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  alamat?: StringWithAggregatesFilter

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  rt?: IntWithAggregatesFilter

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  rw?: IntWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  kelurahan_desa?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  kecamatan?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  kabupaten_kota?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  provinsi?: StringWithAggregatesFilter

  @Field(() => EnumJenisKelaminWithAggregatesFilter, { nullable: true })
  jenis_kelamin?: EnumJenisKelaminWithAggregatesFilter

  @Field(() => EnumGolonganDarahWithAggregatesFilter, { nullable: true })
  golongan_darah?: EnumGolonganDarahWithAggregatesFilter

  @Field(() => EnumAgamaWithAggregatesFilter, { nullable: true })
  agama?: EnumAgamaWithAggregatesFilter

  @Field(() => EnumStatusPerkawinanWithAggregatesFilter, { nullable: true })
  status_perkawinan?: EnumStatusPerkawinanWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  pekerjaan?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  kewarganegaraan?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  tanggal_terbit?: DateTimeWithAggregatesFilter
}

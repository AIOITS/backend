import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StnkWhereInput } from './stnk-where.input'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
import { PkbRelationFilter } from '../pkb/pkb-relation-filter.input'
import { KtpNullableRelationFilter } from '../ktp/ktp-nullable-relation-filter.input'
import { HistoryPengisianListRelationFilter } from '../history-pengisian/history-pengisian-list-relation-filter.input'

@InputType()
export class StnkWhereUniqueInput {
  @Field(() => String, { nullable: true })
  nomor_stnk?: string

  @Field(() => String, { nullable: true })
  nomor_polisi?: string

  @Field(() => String, { nullable: true })
  nomor_pkb?: string

  @Field(() => [StnkWhereInput], { nullable: true })
  AND?: Array<StnkWhereInput>

  @Field(() => [StnkWhereInput], { nullable: true })
  OR?: Array<StnkWhereInput>

  @Field(() => [StnkWhereInput], { nullable: true })
  NOT?: Array<StnkWhereInput>

  @Field(() => StringFilter, { nullable: true })
  nama_pemilik?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  nomor_bpkb?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  alamat?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  bahan_bakar?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  berlaku?: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  merk?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  tipe?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  jenis?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  model?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  tahun_pembuatan?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  isi_silinder?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  nomor_mesin?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  nomor_rangka?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  warna?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  warna_tnkb?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  tahun_registrasi?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  nomor_registrasi?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  kode_lokasi?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  nomor_urut_pendaftaran?: StringFilter

  @Field(() => StringNullableFilter, { nullable: true })
  nik?: StringNullableFilter

  @Field(() => PkbRelationFilter, { nullable: true })
  pkb?: PkbRelationFilter

  @Field(() => KtpNullableRelationFilter, { nullable: true })
  Ktp?: KtpNullableRelationFilter

  @Field(() => HistoryPengisianListRelationFilter, { nullable: true })
  history_pengisian?: HistoryPengisianListRelationFilter
}

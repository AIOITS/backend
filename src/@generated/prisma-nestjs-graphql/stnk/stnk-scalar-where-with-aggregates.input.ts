import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class STNKScalarWhereWithAggregatesInput {
  @Field(() => [STNKScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<STNKScalarWhereWithAggregatesInput>

  @Field(() => [STNKScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<STNKScalarWhereWithAggregatesInput>

  @Field(() => [STNKScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<STNKScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nomor_stnk?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nomor_polisi?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nama_pemilik?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nomor_bpkb?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  alamat?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  bahan_bakar?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  berlaku?: DateTimeWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  merk?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  tipe?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  jenis?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  model?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  tahun_pembuatan?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  isi_silinder?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nomor_mesin?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nomor_rangka?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  warna?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  warna_tnkb?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  tahun_registrasi?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nomor_registrasi?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  kode_lokasi?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nomor_urut_pendaftaran?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nomor_PKB?: StringWithAggregatesFilter
}

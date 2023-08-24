import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'

@InputType()
export class StnkScalarWhereInput {
  @Field(() => [StnkScalarWhereInput], { nullable: true })
  AND?: Array<StnkScalarWhereInput>

  @Field(() => [StnkScalarWhereInput], { nullable: true })
  OR?: Array<StnkScalarWhereInput>

  @Field(() => [StnkScalarWhereInput], { nullable: true })
  NOT?: Array<StnkScalarWhereInput>

  @Field(() => StringFilter, { nullable: true })
  nomor_stnk?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  nomor_polisi?: StringFilter

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

  @Field(() => StringFilter, { nullable: true })
  nomor_pkb?: StringFilter

  @Field(() => StringNullableFilter, { nullable: true })
  nik?: StringNullableFilter
}

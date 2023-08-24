import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { SortOrderInput } from '../prisma/sort-order.input'
import { PkbOrderByWithRelationInput } from '../pkb/pkb-order-by-with-relation.input'
import { KtpOrderByWithRelationInput } from '../ktp/ktp-order-by-with-relation.input'
import { history_pengisianOrderByWithRelationInput } from '../history-pengisian/history-pengisian-order-by-with-relation.input'

@InputType()
export class StnkOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  nomor_stnk?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  nomor_polisi?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  nama_pemilik?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  nomor_bpkb?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  alamat?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  bahan_bakar?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  berlaku?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  merk?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  tipe?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  jenis?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  model?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  tahun_pembuatan?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  isi_silinder?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  nomor_mesin?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  nomor_rangka?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  warna?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  warna_tnkb?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  tahun_registrasi?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  nomor_registrasi?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  kode_lokasi?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  nomor_urut_pendaftaran?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  nomor_pkb?: keyof typeof SortOrder

  @Field(() => SortOrderInput, { nullable: true })
  nik?: SortOrderInput

  @Field(() => PkbOrderByWithRelationInput, { nullable: true })
  pkb?: PkbOrderByWithRelationInput

  @Field(() => KtpOrderByWithRelationInput, { nullable: true })
  Ktp?: KtpOrderByWithRelationInput

  @Field(() => history_pengisianOrderByWithRelationInput, { nullable: true })
  history_pengisian?: history_pengisianOrderByWithRelationInput
}

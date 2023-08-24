import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PkbCreateNestedOneWithoutStnkInput } from '../pkb/pkb-create-nested-one-without-stnk.input'
import { KtpCreateNestedOneWithoutNomor_stnkInput } from '../ktp/ktp-create-nested-one-without-nomor-stnk.input'

@InputType()
export class StnkCreateWithoutHistory_pengisianInput {
  @Field(() => String, { nullable: false })
  nomor_stnk!: string

  @Field(() => String, { nullable: false })
  nomor_polisi!: string

  @Field(() => String, { nullable: false })
  nama_pemilik!: string

  @Field(() => String, { nullable: false })
  nomor_bpkb!: string

  @Field(() => String, { nullable: false })
  alamat!: string

  @Field(() => String, { nullable: false })
  bahan_bakar!: string

  @Field(() => Date, { nullable: false })
  berlaku!: Date | string

  @Field(() => String, { nullable: false })
  merk!: string

  @Field(() => String, { nullable: false })
  tipe!: string

  @Field(() => String, { nullable: false })
  jenis!: string

  @Field(() => String, { nullable: false })
  model!: string

  @Field(() => String, { nullable: false })
  tahun_pembuatan!: string

  @Field(() => String, { nullable: false })
  isi_silinder!: string

  @Field(() => String, { nullable: false })
  nomor_mesin!: string

  @Field(() => String, { nullable: false })
  nomor_rangka!: string

  @Field(() => String, { nullable: false })
  warna!: string

  @Field(() => String, { nullable: false })
  warna_tnkb!: string

  @Field(() => String, { nullable: false })
  tahun_registrasi!: string

  @Field(() => String, { nullable: false })
  nomor_registrasi!: string

  @Field(() => String, { nullable: false })
  kode_lokasi!: string

  @Field(() => String, { nullable: false })
  nomor_urut_pendaftaran!: string

  @Field(() => PkbCreateNestedOneWithoutStnkInput, { nullable: false })
  pkb!: PkbCreateNestedOneWithoutStnkInput

  @Field(() => KtpCreateNestedOneWithoutNomor_stnkInput, { nullable: true })
  Ktp?: KtpCreateNestedOneWithoutNomor_stnkInput
}

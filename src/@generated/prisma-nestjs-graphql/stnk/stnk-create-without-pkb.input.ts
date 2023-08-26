import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KtpCreateNestedOneWithoutStnkInput } from '../ktp/ktp-create-nested-one-without-stnk.input'
import { HistoryPengisianCreateNestedManyWithoutStnkInput } from '../history-pengisian/history-pengisian-create-nested-many-without-stnk.input'

@InputType()
export class StnkCreateWithoutPkbInput {
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

  @Field(() => KtpCreateNestedOneWithoutStnkInput, { nullable: true })
  Ktp?: KtpCreateNestedOneWithoutStnkInput

  @Field(() => HistoryPengisianCreateNestedManyWithoutStnkInput, {
    nullable: true,
  })
  history_pengisian?: HistoryPengisianCreateNestedManyWithoutStnkInput
}

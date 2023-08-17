import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class STNKCountAggregate {
  @Field(() => Int, { nullable: false })
  nomor_stnk!: number

  @Field(() => Int, { nullable: false })
  nomor_polisi!: number

  @Field(() => Int, { nullable: false })
  nama_pemilik!: number

  @Field(() => Int, { nullable: false })
  nomor_bpkb!: number

  @Field(() => Int, { nullable: false })
  alamat!: number

  @Field(() => Int, { nullable: false })
  bahan_bakar!: number

  @Field(() => Int, { nullable: false })
  berlaku!: number

  @Field(() => Int, { nullable: false })
  merk!: number

  @Field(() => Int, { nullable: false })
  tipe!: number

  @Field(() => Int, { nullable: false })
  jenis!: number

  @Field(() => Int, { nullable: false })
  model!: number

  @Field(() => Int, { nullable: false })
  tahun_pembuatan!: number

  @Field(() => Int, { nullable: false })
  isi_silinder!: number

  @Field(() => Int, { nullable: false })
  nomor_mesin!: number

  @Field(() => Int, { nullable: false })
  nomor_rangka!: number

  @Field(() => Int, { nullable: false })
  warna!: number

  @Field(() => Int, { nullable: false })
  warna_tnkb!: number

  @Field(() => Int, { nullable: false })
  tahun_registrasi!: number

  @Field(() => Int, { nullable: false })
  nomor_registrasi!: number

  @Field(() => Int, { nullable: false })
  kode_lokasi!: number

  @Field(() => Int, { nullable: false })
  nomor_urut_pendaftaran!: number

  @Field(() => Int, { nullable: false })
  nomor_PKB!: number

  @Field(() => Int, { nullable: false })
  _all!: number
}

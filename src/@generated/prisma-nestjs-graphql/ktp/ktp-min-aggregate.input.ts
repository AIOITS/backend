import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class KtpMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  nik?: true

  @Field(() => Boolean, { nullable: true })
  nama?: true

  @Field(() => Boolean, { nullable: true })
  tempat_lahir?: true

  @Field(() => Boolean, { nullable: true })
  tanggal_lahir?: true

  @Field(() => Boolean, { nullable: true })
  alamat?: true

  @Field(() => Boolean, { nullable: true })
  rt?: true

  @Field(() => Boolean, { nullable: true })
  rw?: true

  @Field(() => Boolean, { nullable: true })
  kelurahan_desa?: true

  @Field(() => Boolean, { nullable: true })
  kecamatan?: true

  @Field(() => Boolean, { nullable: true })
  kabupaten_kota?: true

  @Field(() => Boolean, { nullable: true })
  provinsi?: true

  @Field(() => Boolean, { nullable: true })
  jenis_kelamin?: true

  @Field(() => Boolean, { nullable: true })
  golongan_darah?: true

  @Field(() => Boolean, { nullable: true })
  agama?: true

  @Field(() => Boolean, { nullable: true })
  status_perkawinan?: true

  @Field(() => Boolean, { nullable: true })
  pekerjaan?: true

  @Field(() => Boolean, { nullable: true })
  kewarganegaraan?: true

  @Field(() => Boolean, { nullable: true })
  tanggal_terbit?: true
}

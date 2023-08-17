import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { GolonganDarah } from '../prisma/golongan-darah.enum'
import { Agama } from '../prisma/agama.enum'
import { StatusPerkawinan } from '../prisma/status-perkawinan.enum'

@ObjectType()
export class KtpMinAggregate {
  @Field(() => String, { nullable: true })
  nik?: string

  @Field(() => String, { nullable: true })
  nama?: string

  @Field(() => String, { nullable: true })
  tempat_lahir?: string

  @Field(() => Date, { nullable: true })
  tanggal_lahir?: Date | string

  @Field(() => String, { nullable: true })
  alamat?: string

  @Field(() => Int, { nullable: true })
  rt?: number

  @Field(() => Int, { nullable: true })
  rw?: number

  @Field(() => String, { nullable: true })
  kelurahan_desa?: string

  @Field(() => String, { nullable: true })
  kecamatan?: string

  @Field(() => String, { nullable: true })
  kabupaten_kota?: string

  @Field(() => String, { nullable: true })
  provinsi?: string

  @Field(() => GolonganDarah, { nullable: true })
  golongan_darah?: keyof typeof GolonganDarah

  @Field(() => Agama, { nullable: true })
  agama?: keyof typeof Agama

  @Field(() => StatusPerkawinan, { nullable: true })
  status_perkawinan?: keyof typeof StatusPerkawinan

  @Field(() => String, { nullable: true })
  pekerjaan?: string

  @Field(() => String, { nullable: true })
  kewarganegaraan?: string

  @Field(() => Date, { nullable: true })
  tanggal_terbit?: Date | string
}

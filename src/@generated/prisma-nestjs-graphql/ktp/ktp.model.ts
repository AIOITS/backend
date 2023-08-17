import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { GolonganDarah } from '../prisma/golongan-darah.enum'
import { Agama } from '../prisma/agama.enum'
import { StatusPerkawinan } from '../prisma/status-perkawinan.enum'
import { ApiProperty } from '@nestjs/swagger'

@ObjectType()
export class KTP {
  @ApiProperty()
  @Field(() => ID, { nullable: false })
  nik!: string

  @ApiProperty()
  @Field(() => String, { nullable: false })
  nama!: string

  @ApiProperty()
  @Field(() => String, { nullable: false })
  tempat_lahir!: string

  @ApiProperty()
  @Field(() => Date, { nullable: false })
  tanggal_lahir!: Date

  @ApiProperty()
  @Field(() => String, { nullable: false })
  alamat!: string

  @ApiProperty()
  @Field(() => Int, { nullable: false })
  rt!: number

  @ApiProperty()
  @Field(() => Int, { nullable: false })
  rw!: number

  @ApiProperty()
  @Field(() => String, { nullable: false })
  kelurahan_desa!: string

  @ApiProperty()
  @Field(() => String, { nullable: false })
  kecamatan!: string

  @ApiProperty()
  @Field(() => String, { nullable: false })
  kabupaten_kota!: string

  @ApiProperty()
  @Field(() => String, { nullable: false })
  provinsi!: string

  @ApiProperty()
  @Field(() => GolonganDarah, { nullable: false })
  golongan_darah!: keyof typeof GolonganDarah

  @ApiProperty()
  @Field(() => Agama, { nullable: false })
  agama!: keyof typeof Agama

  @ApiProperty()
  @Field(() => StatusPerkawinan, { nullable: false })
  status_perkawinan!: keyof typeof StatusPerkawinan

  @ApiProperty()
  @Field(() => String, { nullable: false })
  pekerjaan!: string

  @ApiProperty()
  @Field(() => String, { nullable: false })
  kewarganegaraan!: string

  @ApiProperty()
  @Field(() => Date, { nullable: false })
  tanggal_terbit!: Date
}

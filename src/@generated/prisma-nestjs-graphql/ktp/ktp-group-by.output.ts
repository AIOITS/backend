import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { GolonganDarah } from '../prisma/golongan-darah.enum'
import { Agama } from '../prisma/agama.enum'
import { StatusPerkawinan } from '../prisma/status-perkawinan.enum'
import { KTPCountAggregate } from './ktp-count-aggregate.output'
import { KTPAvgAggregate } from './ktp-avg-aggregate.output'
import { KTPSumAggregate } from './ktp-sum-aggregate.output'
import { KTPMinAggregate } from './ktp-min-aggregate.output'
import { KTPMaxAggregate } from './ktp-max-aggregate.output'

@ObjectType()
export class KTPGroupBy {
  @Field(() => String, { nullable: false })
  nik!: string

  @Field(() => String, { nullable: false })
  nama!: string

  @Field(() => String, { nullable: false })
  tempat_lahir!: string

  @Field(() => Date, { nullable: false })
  tanggal_lahir!: Date | string

  @Field(() => String, { nullable: false })
  alamat!: string

  @Field(() => Int, { nullable: false })
  rt!: number

  @Field(() => Int, { nullable: false })
  rw!: number

  @Field(() => String, { nullable: false })
  kelurahan_desa!: string

  @Field(() => String, { nullable: false })
  kecamatan!: string

  @Field(() => String, { nullable: false })
  kabupaten_kota!: string

  @Field(() => String, { nullable: false })
  provinsi!: string

  @Field(() => GolonganDarah, { nullable: false })
  golongan_darah!: keyof typeof GolonganDarah

  @Field(() => Agama, { nullable: false })
  agama!: keyof typeof Agama

  @Field(() => StatusPerkawinan, { nullable: false })
  status_perkawinan!: keyof typeof StatusPerkawinan

  @Field(() => String, { nullable: false })
  pekerjaan!: string

  @Field(() => String, { nullable: false })
  kewarganegaraan!: string

  @Field(() => Date, { nullable: false })
  tanggal_terbit!: Date | string

  @Field(() => KTPCountAggregate, { nullable: true })
  _count?: KTPCountAggregate

  @Field(() => KTPAvgAggregate, { nullable: true })
  _avg?: KTPAvgAggregate

  @Field(() => KTPSumAggregate, { nullable: true })
  _sum?: KTPSumAggregate

  @Field(() => KTPMinAggregate, { nullable: true })
  _min?: KTPMinAggregate

  @Field(() => KTPMaxAggregate, { nullable: true })
  _max?: KTPMaxAggregate
}

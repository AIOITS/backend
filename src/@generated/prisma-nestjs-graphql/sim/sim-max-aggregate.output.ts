import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { JenisSim } from '../prisma/jenis-sim.enum'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class SimMaxAggregate {
  @Field(() => String, { nullable: true })
  uid?: string

  @Field(() => String, { nullable: true })
  nomor_sim?: string

  @Field(() => JenisSim, { nullable: true })
  jenis_sim?: keyof typeof JenisSim

  @Field(() => String, { nullable: true })
  nama?: string

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
  kabupaten?: string

  @Field(() => String, { nullable: true })
  pekerjaan?: string

  @Field(() => String, { nullable: true })
  kabupaten_terbit?: string

  @Field(() => Date, { nullable: true })
  tanggal_terbit?: Date | string

  @Field(() => String, { nullable: true })
  penerbit?: string

  @Field(() => Date, { nullable: true })
  berlaku_sampai?: Date | string

  @Field(() => String, { nullable: true })
  nik?: string
}

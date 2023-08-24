import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class SimCountAggregate {
  @Field(() => Int, { nullable: false })
  uid!: number

  @Field(() => Int, { nullable: false })
  nomor_sim!: number

  @Field(() => Int, { nullable: false })
  nama!: number

  @Field(() => Int, { nullable: false })
  alamat!: number

  @Field(() => Int, { nullable: false })
  rt!: number

  @Field(() => Int, { nullable: false })
  rw!: number

  @Field(() => Int, { nullable: false })
  kelurahan_desa!: number

  @Field(() => Int, { nullable: false })
  kecamatan!: number

  @Field(() => Int, { nullable: false })
  kabupaten!: number

  @Field(() => Int, { nullable: false })
  pekerjaan!: number

  @Field(() => Int, { nullable: false })
  kabupaten_terbit!: number

  @Field(() => Int, { nullable: false })
  tanggal_terbit!: number

  @Field(() => Int, { nullable: false })
  penerbit!: number

  @Field(() => Int, { nullable: false })
  berlaku_sampai!: number

  @Field(() => Int, { nullable: false })
  nik!: number

  @Field(() => Int, { nullable: false })
  _all!: number
}

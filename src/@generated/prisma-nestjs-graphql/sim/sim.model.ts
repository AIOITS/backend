import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { User } from '../user/user.model'

@ObjectType()
export class SIM {
  @Field(() => ID, { nullable: false })
  nomor_sim!: string

  @Field(() => String, { nullable: false })
  nama!: string

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
  kabupaten!: string

  @Field(() => String, { nullable: false })
  pekerjaan!: string

  @Field(() => String, { nullable: false })
  kabupaten_terbit!: string

  @Field(() => Date, { nullable: false })
  tanggal_terbit!: Date

  @Field(() => String, { nullable: false })
  penerbit!: string

  @Field(() => Date, { nullable: false })
  berlaku_sampai!: Date

  @Field(() => Int, { nullable: true })
  userId!: number | null

  @Field(() => User, { nullable: true })
  User?: User | null
}

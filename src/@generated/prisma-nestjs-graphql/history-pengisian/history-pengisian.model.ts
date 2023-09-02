import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { KategoriPengisian } from '../prisma/kategori-pengisian.enum'
import { Float } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { User } from '../user/user.model'
import { Stnk } from '../stnk/stnk.model'

@ObjectType()
export class HistoryPengisian {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => KategoriPengisian, { nullable: false })
  kategori_pengisian!: keyof typeof KategoriPengisian

  @Field(() => String, { nullable: false })
  nama_spbu!: string

  @Field(() => Float, { nullable: false })
  jumlah!: number

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Int, { nullable: false })
  user_id!: number

  @Field(() => String, { nullable: false })
  nomor_stnk!: string

  @Field(() => User, { nullable: true })
  user?: User | null

  @Field(() => Stnk, { nullable: false })
  stnk?: Stnk
}

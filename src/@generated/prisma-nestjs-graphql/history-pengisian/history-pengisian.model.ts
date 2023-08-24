import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { KategoriPengisian } from '../prisma/kategori-pengisian.enum'
import { Float } from '@nestjs/graphql'
import { Stnk } from '../stnk/stnk.model'

@ObjectType()
export class history_pengisian {
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

  @Field(() => String, { nullable: false })
  nomor_stnk!: string

  @Field(() => Stnk, { nullable: true })
  stnk?: Stnk | null
}

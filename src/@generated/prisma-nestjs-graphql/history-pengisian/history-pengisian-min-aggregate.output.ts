import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { KategoriPengisian } from '../prisma/kategori-pengisian.enum'
import { Float } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class HistoryPengisianMinAggregate {
  @Field(() => KategoriPengisian, { nullable: true })
  kategori_pengisian?: keyof typeof KategoriPengisian

  @Field(() => String, { nullable: true })
  nama_spbu?: string

  @Field(() => Float, { nullable: true })
  jumlah?: number

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => Int, { nullable: true })
  user_id?: number

  @Field(() => String, { nullable: true })
  nomor_stnk?: string
}

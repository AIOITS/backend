import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { KategoriPengisian } from '../prisma/kategori-pengisian.enum'
import { Float } from '@nestjs/graphql'

@ObjectType()
export class HistoryPengisianMaxAggregate {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => KategoriPengisian, { nullable: true })
  kategori_pengisian?: keyof typeof KategoriPengisian

  @Field(() => String, { nullable: true })
  device_id?: string

  @Field(() => String, { nullable: true })
  jenis_kendaraan?: string

  @Field(() => Int, { nullable: true })
  spbu_id?: number

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

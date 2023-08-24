import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { KategoriPengisian } from './kategori-pengisian.enum'
import { Float } from '@nestjs/graphql'

@ObjectType()
export class History_pengisianMaxAggregate {
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

  @Field(() => String, { nullable: true })
  nomor_stnk?: string
}

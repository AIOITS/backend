import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class HistoryPengisianCountAggregate {
  @Field(() => Int, { nullable: false })
  kategori_pengisian!: number

  @Field(() => Int, { nullable: false })
  nama_spbu!: number

  @Field(() => Int, { nullable: false })
  jumlah!: number

  @Field(() => Int, { nullable: false })
  createdAt!: number

  @Field(() => Int, { nullable: false })
  updatedAt!: number

  @Field(() => Int, { nullable: false })
  user_id!: number

  @Field(() => Int, { nullable: false })
  nomor_stnk!: number

  @Field(() => Int, { nullable: false })
  _all!: number
}

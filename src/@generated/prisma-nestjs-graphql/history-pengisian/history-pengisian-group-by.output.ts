import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { KategoriPengisian } from '../prisma/kategori-pengisian.enum'
import { Float } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { HistoryPengisianCountAggregate } from './history-pengisian-count-aggregate.output'
import { HistoryPengisianAvgAggregate } from './history-pengisian-avg-aggregate.output'
import { HistoryPengisianSumAggregate } from './history-pengisian-sum-aggregate.output'
import { HistoryPengisianMinAggregate } from './history-pengisian-min-aggregate.output'
import { HistoryPengisianMaxAggregate } from './history-pengisian-max-aggregate.output'

@ObjectType()
export class HistoryPengisianGroupBy {
  @Field(() => KategoriPengisian, { nullable: false })
  kategori_pengisian!: keyof typeof KategoriPengisian

  @Field(() => String, { nullable: false })
  nama_spbu!: string

  @Field(() => Float, { nullable: false })
  jumlah!: number

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => Int, { nullable: false })
  user_id!: number

  @Field(() => String, { nullable: false })
  nomor_stnk!: string

  @Field(() => HistoryPengisianCountAggregate, { nullable: true })
  _count?: HistoryPengisianCountAggregate

  @Field(() => HistoryPengisianAvgAggregate, { nullable: true })
  _avg?: HistoryPengisianAvgAggregate

  @Field(() => HistoryPengisianSumAggregate, { nullable: true })
  _sum?: HistoryPengisianSumAggregate

  @Field(() => HistoryPengisianMinAggregate, { nullable: true })
  _min?: HistoryPengisianMinAggregate

  @Field(() => HistoryPengisianMaxAggregate, { nullable: true })
  _max?: HistoryPengisianMaxAggregate
}

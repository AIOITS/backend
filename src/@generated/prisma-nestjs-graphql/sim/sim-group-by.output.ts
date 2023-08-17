import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { SIMCountAggregate } from './sim-count-aggregate.output'
import { SIMAvgAggregate } from './sim-avg-aggregate.output'
import { SIMSumAggregate } from './sim-sum-aggregate.output'
import { SIMMinAggregate } from './sim-min-aggregate.output'
import { SIMMaxAggregate } from './sim-max-aggregate.output'

@ObjectType()
export class SIMGroupBy {
  @Field(() => String, { nullable: false })
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
  tanggal_terbit!: Date | string

  @Field(() => String, { nullable: false })
  penerbit!: string

  @Field(() => Date, { nullable: false })
  berlaku_sampai!: Date | string

  @Field(() => Int, { nullable: true })
  userId?: number

  @Field(() => SIMCountAggregate, { nullable: true })
  _count?: SIMCountAggregate

  @Field(() => SIMAvgAggregate, { nullable: true })
  _avg?: SIMAvgAggregate

  @Field(() => SIMSumAggregate, { nullable: true })
  _sum?: SIMSumAggregate

  @Field(() => SIMMinAggregate, { nullable: true })
  _min?: SIMMinAggregate

  @Field(() => SIMMaxAggregate, { nullable: true })
  _max?: SIMMaxAggregate
}

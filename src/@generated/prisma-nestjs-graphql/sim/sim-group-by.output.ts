import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { SimCountAggregate } from './sim-count-aggregate.output'
import { SimAvgAggregate } from './sim-avg-aggregate.output'
import { SimSumAggregate } from './sim-sum-aggregate.output'
import { SimMinAggregate } from './sim-min-aggregate.output'
import { SimMaxAggregate } from './sim-max-aggregate.output'

@ObjectType()
export class SimGroupBy {
  @Field(() => String, { nullable: false })
  uid!: string

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

  @Field(() => String, { nullable: true })
  nik?: string

  @Field(() => SimCountAggregate, { nullable: true })
  _count?: SimCountAggregate

  @Field(() => SimAvgAggregate, { nullable: true })
  _avg?: SimAvgAggregate

  @Field(() => SimSumAggregate, { nullable: true })
  _sum?: SimSumAggregate

  @Field(() => SimMinAggregate, { nullable: true })
  _min?: SimMinAggregate

  @Field(() => SimMaxAggregate, { nullable: true })
  _max?: SimMaxAggregate
}

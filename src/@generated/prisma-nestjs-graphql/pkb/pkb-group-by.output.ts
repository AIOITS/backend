import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { PkbCountAggregate } from './pkb-count-aggregate.output'
import { PkbAvgAggregate } from './pkb-avg-aggregate.output'
import { PkbSumAggregate } from './pkb-sum-aggregate.output'
import { PkbMinAggregate } from './pkb-min-aggregate.output'
import { PkbMaxAggregate } from './pkb-max-aggregate.output'

@ObjectType()
export class PkbGroupBy {
  @Field(() => String, { nullable: false })
  nomor_pkb!: string

  @Field(() => Boolean, { nullable: false })
  status_pajak!: boolean

  @Field(() => Int, { nullable: false })
  bbknb_pokok!: number

  @Field(() => Int, { nullable: false })
  bbknb_sanksi!: number

  @Field(() => Int, { nullable: false })
  PKB_pokok!: number

  @Field(() => Int, { nullable: false })
  PKB_sanksi!: number

  @Field(() => Int, { nullable: false })
  swdkllj_pokok!: number

  @Field(() => Int, { nullable: false })
  swdkllj_sanksi!: number

  @Field(() => Int, { nullable: false })
  administrasi_stnk_pokok!: number

  @Field(() => Int, { nullable: false })
  administrasi_stnk_sanksi!: number

  @Field(() => Int, { nullable: false })
  administrasi_tnkb_pokok!: number

  @Field(() => Int, { nullable: false })
  administrasi_tnkb_sanksi!: number

  @Field(() => PkbCountAggregate, { nullable: true })
  _count?: PkbCountAggregate

  @Field(() => PkbAvgAggregate, { nullable: true })
  _avg?: PkbAvgAggregate

  @Field(() => PkbSumAggregate, { nullable: true })
  _sum?: PkbSumAggregate

  @Field(() => PkbMinAggregate, { nullable: true })
  _min?: PkbMinAggregate

  @Field(() => PkbMaxAggregate, { nullable: true })
  _max?: PkbMaxAggregate
}

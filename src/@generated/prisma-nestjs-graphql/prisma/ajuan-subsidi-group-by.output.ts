import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { StatusPengajuanSubsidi } from './status-pengajuan-subsidi.enum'
import { Ajuan_subsidiCountAggregate } from './ajuan-subsidi-count-aggregate.output'
import { Ajuan_subsidiAvgAggregate } from './ajuan-subsidi-avg-aggregate.output'
import { Ajuan_subsidiSumAggregate } from './ajuan-subsidi-sum-aggregate.output'
import { Ajuan_subsidiMinAggregate } from './ajuan-subsidi-min-aggregate.output'
import { Ajuan_subsidiMaxAggregate } from './ajuan-subsidi-max-aggregate.output'

@ObjectType()
export class Ajuan_subsidiGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number

  @Field(() => Int, { nullable: false })
  jumlah!: number

  @Field(() => String, { nullable: false })
  alasan!: string

  @Field(() => [String], { nullable: true })
  dokumen_pendukung?: Array<string>

  @Field(() => Date, { nullable: false })
  tanggal_pengajuan!: Date | string

  @Field(() => StatusPengajuanSubsidi, { nullable: false })
  status_pengajuan!: keyof typeof StatusPengajuanSubsidi

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => Ajuan_subsidiCountAggregate, { nullable: true })
  _count?: Ajuan_subsidiCountAggregate

  @Field(() => Ajuan_subsidiAvgAggregate, { nullable: true })
  _avg?: Ajuan_subsidiAvgAggregate

  @Field(() => Ajuan_subsidiSumAggregate, { nullable: true })
  _sum?: Ajuan_subsidiSumAggregate

  @Field(() => Ajuan_subsidiMinAggregate, { nullable: true })
  _min?: Ajuan_subsidiMinAggregate

  @Field(() => Ajuan_subsidiMaxAggregate, { nullable: true })
  _max?: Ajuan_subsidiMaxAggregate
}

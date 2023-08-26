import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { StatusPengajuanSubsidi } from '../prisma/status-pengajuan-subsidi.enum'
import { AjuanSubsidiCountAggregate } from './ajuan-subsidi-count-aggregate.output'
import { AjuanSubsidiAvgAggregate } from './ajuan-subsidi-avg-aggregate.output'
import { AjuanSubsidiSumAggregate } from './ajuan-subsidi-sum-aggregate.output'
import { AjuanSubsidiMinAggregate } from './ajuan-subsidi-min-aggregate.output'
import { AjuanSubsidiMaxAggregate } from './ajuan-subsidi-max-aggregate.output'

@ObjectType()
export class AjuanSubsidiGroupBy {
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

  @Field(() => Int, { nullable: true })
  userId?: number

  @Field(() => AjuanSubsidiCountAggregate, { nullable: true })
  _count?: AjuanSubsidiCountAggregate

  @Field(() => AjuanSubsidiAvgAggregate, { nullable: true })
  _avg?: AjuanSubsidiAvgAggregate

  @Field(() => AjuanSubsidiSumAggregate, { nullable: true })
  _sum?: AjuanSubsidiSumAggregate

  @Field(() => AjuanSubsidiMinAggregate, { nullable: true })
  _min?: AjuanSubsidiMinAggregate

  @Field(() => AjuanSubsidiMaxAggregate, { nullable: true })
  _max?: AjuanSubsidiMaxAggregate
}

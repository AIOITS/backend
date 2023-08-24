import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { StatusPengajuanSubsidi } from '../prisma/status-pengajuan-subsidi.enum'

@ObjectType()
export class ajuan_subsidi {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => Int, { nullable: false })
  jumlah!: number

  @Field(() => String, { nullable: false })
  alasan!: string

  @Field(() => [String], { nullable: true })
  dokumen_pendukung!: Array<string>

  @Field(() => Date, { nullable: false })
  tanggal_pengajuan!: Date

  @Field(() => StatusPengajuanSubsidi, { nullable: false })
  status_pengajuan!: keyof typeof StatusPengajuanSubsidi

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date
}
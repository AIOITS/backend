import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { ajuan_subsidiCreatedokumen_pendukungInput } from './ajuan-subsidi-createdokumen-pendukung.input'
import { StatusPengajuanSubsidi } from '../prisma/status-pengajuan-subsidi.enum'

@InputType()
export class ajuan_subsidiCreateManyInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => Int, { nullable: false })
  jumlah!: number

  @Field(() => String, { nullable: false })
  alasan!: string

  @Field(() => ajuan_subsidiCreatedokumen_pendukungInput, { nullable: true })
  dokumen_pendukung?: ajuan_subsidiCreatedokumen_pendukungInput

  @Field(() => Date, { nullable: false })
  tanggal_pengajuan!: Date | string

  @Field(() => StatusPengajuanSubsidi, { nullable: false })
  status_pengajuan!: keyof typeof StatusPengajuanSubsidi

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { AjuanSubsidiCreatedokumen_pendukungInput } from './ajuan-subsidi-createdokumen-pendukung.input'
import { StatusPengajuanSubsidi } from '../prisma/status-pengajuan-subsidi.enum'
import { UserCreateNestedOneWithoutAjuan_subsidiInput } from '../user/user-create-nested-one-without-ajuan-subsidi.input'

@InputType()
export class AjuanSubsidiCreateInput {
  @Field(() => Int, { nullable: false })
  jumlah!: number

  @Field(() => String, { nullable: false })
  alasan!: string

  @Field(() => AjuanSubsidiCreatedokumen_pendukungInput, { nullable: true })
  dokumen_pendukung?: AjuanSubsidiCreatedokumen_pendukungInput

  @Field(() => Date, { nullable: false })
  tanggal_pengajuan!: Date | string

  @Field(() => StatusPengajuanSubsidi, { nullable: false })
  status_pengajuan!: keyof typeof StatusPengajuanSubsidi

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => UserCreateNestedOneWithoutAjuan_subsidiInput, { nullable: true })
  user?: UserCreateNestedOneWithoutAjuan_subsidiInput
}

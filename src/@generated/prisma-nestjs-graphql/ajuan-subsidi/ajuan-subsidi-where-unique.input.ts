import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { ajuan_subsidiWhereInput } from './ajuan-subsidi-where.input'
import { IntFilter } from '../prisma/int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { EnumStatusPengajuanSubsidiFilter } from '../prisma/enum-status-pengajuan-subsidi-filter.input'

@InputType()
export class ajuan_subsidiWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => [ajuan_subsidiWhereInput], { nullable: true })
  AND?: Array<ajuan_subsidiWhereInput>

  @Field(() => [ajuan_subsidiWhereInput], { nullable: true })
  OR?: Array<ajuan_subsidiWhereInput>

  @Field(() => [ajuan_subsidiWhereInput], { nullable: true })
  NOT?: Array<ajuan_subsidiWhereInput>

  @Field(() => IntFilter, { nullable: true })
  jumlah?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  alasan?: StringFilter

  @Field(() => StringNullableListFilter, { nullable: true })
  dokumen_pendukung?: StringNullableListFilter

  @Field(() => DateTimeFilter, { nullable: true })
  tanggal_pengajuan?: DateTimeFilter

  @Field(() => EnumStatusPengajuanSubsidiFilter, { nullable: true })
  status_pengajuan?: EnumStatusPengajuanSubsidiFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { AjuanSubsidiWhereInput } from './ajuan-subsidi-where.input'
import { IntFilter } from '../prisma/int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { EnumStatusPengajuanSubsidiFilter } from '../prisma/enum-status-pengajuan-subsidi-filter.input'
import { IntNullableFilter } from '../prisma/int-nullable-filter.input'
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input'

@InputType()
export class AjuanSubsidiWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => [AjuanSubsidiWhereInput], { nullable: true })
  AND?: Array<AjuanSubsidiWhereInput>

  @Field(() => [AjuanSubsidiWhereInput], { nullable: true })
  OR?: Array<AjuanSubsidiWhereInput>

  @Field(() => [AjuanSubsidiWhereInput], { nullable: true })
  NOT?: Array<AjuanSubsidiWhereInput>

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

  @Field(() => IntNullableFilter, { nullable: true })
  userId?: IntNullableFilter

  @Field(() => UserNullableRelationFilter, { nullable: true })
  user?: UserNullableRelationFilter
}

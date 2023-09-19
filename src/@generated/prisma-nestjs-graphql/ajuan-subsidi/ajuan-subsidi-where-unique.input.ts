import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { AjuanSubsidiWhereInput } from './ajuan-subsidi-where.input'
import { IntFilter } from '../prisma/int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { EnumStatusPengajuanSubsidiNullableFilter } from '../prisma/enum-status-pengajuan-subsidi-nullable-filter.input'
import { IntNullableFilter } from '../prisma/int-nullable-filter.input'
import { FileListRelationFilter } from '../file/file-list-relation-filter.input'
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

  @Field(() => DateTimeFilter, { nullable: true })
  tanggal_pengajuan?: DateTimeFilter

  @Field(() => EnumStatusPengajuanSubsidiNullableFilter, { nullable: true })
  status_pengajuan?: EnumStatusPengajuanSubsidiNullableFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => IntNullableFilter, { nullable: true })
  user_id?: IntNullableFilter

  @Field(() => FileListRelationFilter, { nullable: true })
  dokumen_pendukung?: FileListRelationFilter

  @Field(() => UserNullableRelationFilter, { nullable: true })
  user?: UserNullableRelationFilter
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'
import { EnumStatusPengajuanSubsidiNullableWithAggregatesFilter } from '../prisma/enum-status-pengajuan-subsidi-nullable-with-aggregates-filter.input'
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input'

@InputType()
export class AjuanSubsidiScalarWhereWithAggregatesInput {
  @Field(() => [AjuanSubsidiScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<AjuanSubsidiScalarWhereWithAggregatesInput>

  @Field(() => [AjuanSubsidiScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<AjuanSubsidiScalarWhereWithAggregatesInput>

  @Field(() => [AjuanSubsidiScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<AjuanSubsidiScalarWhereWithAggregatesInput>

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  jumlah?: IntWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  alasan?: StringWithAggregatesFilter

  @Field(() => StringNullableListFilter, { nullable: true })
  dokumen_pendukung?: StringNullableListFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  tanggal_pengajuan?: DateTimeWithAggregatesFilter

  @Field(() => EnumStatusPengajuanSubsidiNullableWithAggregatesFilter, {
    nullable: true,
  })
  status_pengajuan?: EnumStatusPengajuanSubsidiNullableWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  userId?: IntNullableWithAggregatesFilter
}

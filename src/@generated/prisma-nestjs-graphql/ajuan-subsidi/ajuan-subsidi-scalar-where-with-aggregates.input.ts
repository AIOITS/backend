import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'
import { EnumStatusPengajuanSubsidiWithAggregatesFilter } from '../prisma/enum-status-pengajuan-subsidi-with-aggregates-filter.input'

@InputType()
export class ajuan_subsidiScalarWhereWithAggregatesInput {
  @Field(() => [ajuan_subsidiScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<ajuan_subsidiScalarWhereWithAggregatesInput>

  @Field(() => [ajuan_subsidiScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<ajuan_subsidiScalarWhereWithAggregatesInput>

  @Field(() => [ajuan_subsidiScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<ajuan_subsidiScalarWhereWithAggregatesInput>

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

  @Field(() => EnumStatusPengajuanSubsidiWithAggregatesFilter, {
    nullable: true,
  })
  status_pengajuan?: EnumStatusPengajuanSubsidiWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}

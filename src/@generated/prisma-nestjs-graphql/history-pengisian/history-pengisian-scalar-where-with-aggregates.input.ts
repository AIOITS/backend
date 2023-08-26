import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EnumKategoriPengisianWithAggregatesFilter } from '../prisma/enum-kategori-pengisian-with-aggregates-filter.input'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input'

@InputType()
export class HistoryPengisianScalarWhereWithAggregatesInput {
  @Field(() => [HistoryPengisianScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<HistoryPengisianScalarWhereWithAggregatesInput>

  @Field(() => [HistoryPengisianScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<HistoryPengisianScalarWhereWithAggregatesInput>

  @Field(() => [HistoryPengisianScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<HistoryPengisianScalarWhereWithAggregatesInput>

  @Field(() => EnumKategoriPengisianWithAggregatesFilter, { nullable: true })
  kategori_pengisian?: EnumKategoriPengisianWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nama_spbu?: StringWithAggregatesFilter

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  jumlah?: FloatWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  user_id?: IntWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nomor_stnk?: StringWithAggregatesFilter
}

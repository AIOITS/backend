import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EnumKategoriPengisianWithAggregatesFilter } from '../prisma/enum-kategori-pengisian-with-aggregates-filter.input'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class history_pengisianScalarWhereWithAggregatesInput {
  @Field(() => [history_pengisianScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<history_pengisianScalarWhereWithAggregatesInput>

  @Field(() => [history_pengisianScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<history_pengisianScalarWhereWithAggregatesInput>

  @Field(() => [history_pengisianScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<history_pengisianScalarWhereWithAggregatesInput>

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

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nomor_stnk?: StringWithAggregatesFilter
}

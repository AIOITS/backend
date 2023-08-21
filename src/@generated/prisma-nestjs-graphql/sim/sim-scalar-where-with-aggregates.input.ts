import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input'

@InputType()
export class SimScalarWhereWithAggregatesInput {
  @Field(() => [SimScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<SimScalarWhereWithAggregatesInput>

  @Field(() => [SimScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<SimScalarWhereWithAggregatesInput>

  @Field(() => [SimScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<SimScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  uid?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nomor_sim?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nama?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  alamat?: StringWithAggregatesFilter

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  rt?: IntWithAggregatesFilter

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  rw?: IntWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  kelurahan_desa?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  kecamatan?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  kabupaten?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  pekerjaan?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  kabupaten_terbit?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  tanggal_terbit?: DateTimeWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  penerbit?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  berlaku_sampai?: DateTimeWithAggregatesFilter

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  userId?: IntNullableWithAggregatesFilter
}

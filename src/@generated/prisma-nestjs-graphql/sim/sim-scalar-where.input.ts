import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { IntFilter } from '../prisma/int-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { IntNullableFilter } from '../prisma/int-nullable-filter.input'

@InputType()
export class SimScalarWhereInput {
  @Field(() => [SimScalarWhereInput], { nullable: true })
  AND?: Array<SimScalarWhereInput>

  @Field(() => [SimScalarWhereInput], { nullable: true })
  OR?: Array<SimScalarWhereInput>

  @Field(() => [SimScalarWhereInput], { nullable: true })
  NOT?: Array<SimScalarWhereInput>

  @Field(() => StringFilter, { nullable: true })
  nomor_sim?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  nama?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  alamat?: StringFilter

  @Field(() => IntFilter, { nullable: true })
  rt?: IntFilter

  @Field(() => IntFilter, { nullable: true })
  rw?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  kelurahan_desa?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  kecamatan?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  kabupaten?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  pekerjaan?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  kabupaten_terbit?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  tanggal_terbit?: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  penerbit?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  berlaku_sampai?: DateTimeFilter

  @Field(() => IntNullableFilter, { nullable: true })
  userId?: IntNullableFilter
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFilter } from '../prisma/int-filter.input'
import { EnumKategoriPengisianFilter } from '../prisma/enum-kategori-pengisian-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { FloatFilter } from '../prisma/float-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class HistoryPengisianScalarWhereInput {
  @Field(() => [HistoryPengisianScalarWhereInput], { nullable: true })
  AND?: Array<HistoryPengisianScalarWhereInput>

  @Field(() => [HistoryPengisianScalarWhereInput], { nullable: true })
  OR?: Array<HistoryPengisianScalarWhereInput>

  @Field(() => [HistoryPengisianScalarWhereInput], { nullable: true })
  NOT?: Array<HistoryPengisianScalarWhereInput>

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter

  @Field(() => EnumKategoriPengisianFilter, { nullable: true })
  kategori_pengisian?: EnumKategoriPengisianFilter

  @Field(() => StringFilter, { nullable: true })
  device_id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  jenis_kendaraan?: StringFilter

  @Field(() => IntFilter, { nullable: true })
  spbu_id?: IntFilter

  @Field(() => FloatFilter, { nullable: true })
  jumlah?: FloatFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => IntFilter, { nullable: true })
  user_id?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  nomor_stnk?: StringFilter
}

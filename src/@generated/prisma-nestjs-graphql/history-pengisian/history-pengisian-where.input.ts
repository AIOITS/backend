import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EnumKategoriPengisianFilter } from '../prisma/enum-kategori-pengisian-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { FloatFilter } from '../prisma/float-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { StnkNullableRelationFilter } from '../stnk/stnk-nullable-relation-filter.input'

@InputType()
export class history_pengisianWhereInput {
  @Field(() => [history_pengisianWhereInput], { nullable: true })
  AND?: Array<history_pengisianWhereInput>

  @Field(() => [history_pengisianWhereInput], { nullable: true })
  OR?: Array<history_pengisianWhereInput>

  @Field(() => [history_pengisianWhereInput], { nullable: true })
  NOT?: Array<history_pengisianWhereInput>

  @Field(() => EnumKategoriPengisianFilter, { nullable: true })
  kategori_pengisian?: EnumKategoriPengisianFilter

  @Field(() => StringFilter, { nullable: true })
  nama_spbu?: StringFilter

  @Field(() => FloatFilter, { nullable: true })
  jumlah?: FloatFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  nomor_stnk?: StringFilter

  @Field(() => StnkNullableRelationFilter, { nullable: true })
  stnk?: StnkNullableRelationFilter
}

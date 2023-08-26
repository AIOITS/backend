import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KategoriPengisian } from '../prisma/kategori-pengisian.enum'
import { HistoryPengisianWhereInput } from './history-pengisian-where.input'
import { StringFilter } from '../prisma/string-filter.input'
import { FloatFilter } from '../prisma/float-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { IntFilter } from '../prisma/int-filter.input'
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input'
import { StnkRelationFilter } from '../stnk/stnk-relation-filter.input'

@InputType()
export class HistoryPengisianWhereUniqueInput {
  @Field(() => KategoriPengisian, { nullable: true })
  kategori_pengisian?: keyof typeof KategoriPengisian

  @Field(() => [HistoryPengisianWhereInput], { nullable: true })
  AND?: Array<HistoryPengisianWhereInput>

  @Field(() => [HistoryPengisianWhereInput], { nullable: true })
  OR?: Array<HistoryPengisianWhereInput>

  @Field(() => [HistoryPengisianWhereInput], { nullable: true })
  NOT?: Array<HistoryPengisianWhereInput>

  @Field(() => StringFilter, { nullable: true })
  nama_spbu?: StringFilter

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

  @Field(() => UserNullableRelationFilter, { nullable: true })
  user?: UserNullableRelationFilter

  @Field(() => StnkRelationFilter, { nullable: true })
  stnk?: StnkRelationFilter
}

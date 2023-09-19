import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFilter } from '../prisma/int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { DeviceListRelationFilter } from '../device/device-list-relation-filter.input'
import { HistoryPengisianListRelationFilter } from '../history-pengisian/history-pengisian-list-relation-filter.input'

@InputType()
export class SpbuWhereInput {
  @Field(() => [SpbuWhereInput], { nullable: true })
  AND?: Array<SpbuWhereInput>

  @Field(() => [SpbuWhereInput], { nullable: true })
  OR?: Array<SpbuWhereInput>

  @Field(() => [SpbuWhereInput], { nullable: true })
  NOT?: Array<SpbuWhereInput>

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  alamat?: StringFilter

  @Field(() => DeviceListRelationFilter, { nullable: true })
  device?: DeviceListRelationFilter

  @Field(() => HistoryPengisianListRelationFilter, { nullable: true })
  historyPengisian?: HistoryPengisianListRelationFilter
}

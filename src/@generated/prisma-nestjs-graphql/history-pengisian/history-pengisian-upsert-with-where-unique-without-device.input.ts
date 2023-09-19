import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { Type } from 'class-transformer'
import { HistoryPengisianUpdateWithoutDeviceInput } from './history-pengisian-update-without-device.input'
import { HistoryPengisianCreateWithoutDeviceInput } from './history-pengisian-create-without-device.input'

@InputType()
export class HistoryPengisianUpsertWithWhereUniqueWithoutDeviceInput {
  @Field(() => HistoryPengisianWhereUniqueInput, { nullable: false })
  @Type(() => HistoryPengisianWhereUniqueInput)
  where!: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>

  @Field(() => HistoryPengisianUpdateWithoutDeviceInput, { nullable: false })
  @Type(() => HistoryPengisianUpdateWithoutDeviceInput)
  update!: HistoryPengisianUpdateWithoutDeviceInput

  @Field(() => HistoryPengisianCreateWithoutDeviceInput, { nullable: false })
  @Type(() => HistoryPengisianCreateWithoutDeviceInput)
  create!: HistoryPengisianCreateWithoutDeviceInput
}

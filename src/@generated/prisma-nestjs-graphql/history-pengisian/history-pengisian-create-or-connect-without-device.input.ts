import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { Type } from 'class-transformer'
import { HistoryPengisianCreateWithoutDeviceInput } from './history-pengisian-create-without-device.input'

@InputType()
export class HistoryPengisianCreateOrConnectWithoutDeviceInput {
  @Field(() => HistoryPengisianWhereUniqueInput, { nullable: false })
  @Type(() => HistoryPengisianWhereUniqueInput)
  where!: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>

  @Field(() => HistoryPengisianCreateWithoutDeviceInput, { nullable: false })
  @Type(() => HistoryPengisianCreateWithoutDeviceInput)
  create!: HistoryPengisianCreateWithoutDeviceInput
}

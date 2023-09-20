import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { Type } from 'class-transformer'
import { HistoryPengisianUpdateWithoutBbmInput } from './history-pengisian-update-without-bbm.input'

@InputType()
export class HistoryPengisianUpdateWithWhereUniqueWithoutBbmInput {
  @Field(() => HistoryPengisianWhereUniqueInput, { nullable: false })
  @Type(() => HistoryPengisianWhereUniqueInput)
  where!: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>

  @Field(() => HistoryPengisianUpdateWithoutBbmInput, { nullable: false })
  @Type(() => HistoryPengisianUpdateWithoutBbmInput)
  data!: HistoryPengisianUpdateWithoutBbmInput
}

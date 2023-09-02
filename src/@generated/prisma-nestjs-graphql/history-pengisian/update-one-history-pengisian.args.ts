import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { HistoryPengisianUpdateInput } from './history-pengisian-update.input'
import { Type } from 'class-transformer'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'

@ArgsType()
export class UpdateOneHistoryPengisianArgs {
  @Field(() => HistoryPengisianUpdateInput, { nullable: false })
  @Type(() => HistoryPengisianUpdateInput)
  data!: HistoryPengisianUpdateInput

  @Field(() => HistoryPengisianWhereUniqueInput, { nullable: false })
  @Type(() => HistoryPengisianWhereUniqueInput)
  where!: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>
}

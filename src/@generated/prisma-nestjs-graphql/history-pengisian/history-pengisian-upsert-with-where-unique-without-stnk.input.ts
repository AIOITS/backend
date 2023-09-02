import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { Type } from 'class-transformer'
import { HistoryPengisianUpdateWithoutStnkInput } from './history-pengisian-update-without-stnk.input'
import { HistoryPengisianCreateWithoutStnkInput } from './history-pengisian-create-without-stnk.input'

@InputType()
export class HistoryPengisianUpsertWithWhereUniqueWithoutStnkInput {
  @Field(() => HistoryPengisianWhereUniqueInput, { nullable: false })
  @Type(() => HistoryPengisianWhereUniqueInput)
  where!: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>

  @Field(() => HistoryPengisianUpdateWithoutStnkInput, { nullable: false })
  @Type(() => HistoryPengisianUpdateWithoutStnkInput)
  update!: HistoryPengisianUpdateWithoutStnkInput

  @Field(() => HistoryPengisianCreateWithoutStnkInput, { nullable: false })
  @Type(() => HistoryPengisianCreateWithoutStnkInput)
  create!: HistoryPengisianCreateWithoutStnkInput
}

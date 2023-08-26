import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { Type } from 'class-transformer'
import { HistoryPengisianUpdateWithoutStnkInput } from './history-pengisian-update-without-stnk.input'

@InputType()
export class HistoryPengisianUpdateWithWhereUniqueWithoutStnkInput {
  @Field(() => HistoryPengisianWhereUniqueInput, { nullable: false })
  @Type(() => HistoryPengisianWhereUniqueInput)
  where!: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'kategori_pengisian'>

  @Field(() => HistoryPengisianUpdateWithoutStnkInput, { nullable: false })
  @Type(() => HistoryPengisianUpdateWithoutStnkInput)
  data!: HistoryPengisianUpdateWithoutStnkInput
}

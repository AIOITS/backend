import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { Type } from 'class-transformer'
import { HistoryPengisianUpdateWithoutUserInput } from './history-pengisian-update-without-user.input'

@InputType()
export class HistoryPengisianUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => HistoryPengisianWhereUniqueInput, { nullable: false })
  @Type(() => HistoryPengisianWhereUniqueInput)
  where!: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'kategori_pengisian'>

  @Field(() => HistoryPengisianUpdateWithoutUserInput, { nullable: false })
  @Type(() => HistoryPengisianUpdateWithoutUserInput)
  data!: HistoryPengisianUpdateWithoutUserInput
}

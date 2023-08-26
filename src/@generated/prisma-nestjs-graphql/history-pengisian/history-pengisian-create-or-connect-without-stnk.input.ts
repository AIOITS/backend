import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { Type } from 'class-transformer'
import { HistoryPengisianCreateWithoutStnkInput } from './history-pengisian-create-without-stnk.input'

@InputType()
export class HistoryPengisianCreateOrConnectWithoutStnkInput {
  @Field(() => HistoryPengisianWhereUniqueInput, { nullable: false })
  @Type(() => HistoryPengisianWhereUniqueInput)
  where!: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'kategori_pengisian'>

  @Field(() => HistoryPengisianCreateWithoutStnkInput, { nullable: false })
  @Type(() => HistoryPengisianCreateWithoutStnkInput)
  create!: HistoryPengisianCreateWithoutStnkInput
}

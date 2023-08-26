import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { Type } from 'class-transformer'
import { HistoryPengisianCreateWithoutUserInput } from './history-pengisian-create-without-user.input'

@InputType()
export class HistoryPengisianCreateOrConnectWithoutUserInput {
  @Field(() => HistoryPengisianWhereUniqueInput, { nullable: false })
  @Type(() => HistoryPengisianWhereUniqueInput)
  where!: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'kategori_pengisian'>

  @Field(() => HistoryPengisianCreateWithoutUserInput, { nullable: false })
  @Type(() => HistoryPengisianCreateWithoutUserInput)
  create!: HistoryPengisianCreateWithoutUserInput
}

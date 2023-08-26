import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HistoryPengisianCreateWithoutStnkInput } from './history-pengisian-create-without-stnk.input'
import { Type } from 'class-transformer'
import { HistoryPengisianCreateOrConnectWithoutStnkInput } from './history-pengisian-create-or-connect-without-stnk.input'
import { HistoryPengisianCreateManyStnkInputEnvelope } from './history-pengisian-create-many-stnk-input-envelope.input'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'

@InputType()
export class HistoryPengisianCreateNestedManyWithoutStnkInput {
  @Field(() => [HistoryPengisianCreateWithoutStnkInput], { nullable: true })
  @Type(() => HistoryPengisianCreateWithoutStnkInput)
  create?: Array<HistoryPengisianCreateWithoutStnkInput>

  @Field(() => [HistoryPengisianCreateOrConnectWithoutStnkInput], {
    nullable: true,
  })
  @Type(() => HistoryPengisianCreateOrConnectWithoutStnkInput)
  connectOrCreate?: Array<HistoryPengisianCreateOrConnectWithoutStnkInput>

  @Field(() => HistoryPengisianCreateManyStnkInputEnvelope, { nullable: true })
  @Type(() => HistoryPengisianCreateManyStnkInputEnvelope)
  createMany?: HistoryPengisianCreateManyStnkInputEnvelope

  @Field(() => [HistoryPengisianWhereUniqueInput], { nullable: true })
  @Type(() => HistoryPengisianWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'kategori_pengisian'>
  >
}

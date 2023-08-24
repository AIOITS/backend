import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { history_pengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { Type } from 'class-transformer'
import { history_pengisianCreateWithoutStnkInput } from './history-pengisian-create-without-stnk.input'

@InputType()
export class history_pengisianCreateOrConnectWithoutStnkInput {
  @Field(() => history_pengisianWhereUniqueInput, { nullable: false })
  @Type(() => history_pengisianWhereUniqueInput)
  where!: Prisma.AtLeast<
    history_pengisianWhereUniqueInput,
    'kategori_pengisian' | 'nomor_stnk'
  >

  @Field(() => history_pengisianCreateWithoutStnkInput, { nullable: false })
  @Type(() => history_pengisianCreateWithoutStnkInput)
  create!: history_pengisianCreateWithoutStnkInput
}

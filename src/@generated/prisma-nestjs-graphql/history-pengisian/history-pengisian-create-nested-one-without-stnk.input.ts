import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { history_pengisianCreateWithoutStnkInput } from './history-pengisian-create-without-stnk.input'
import { Type } from 'class-transformer'
import { history_pengisianCreateOrConnectWithoutStnkInput } from './history-pengisian-create-or-connect-without-stnk.input'
import { Prisma } from '@prisma/client'
import { history_pengisianWhereUniqueInput } from './history-pengisian-where-unique.input'

@InputType()
export class history_pengisianCreateNestedOneWithoutStnkInput {
  @Field(() => history_pengisianCreateWithoutStnkInput, { nullable: true })
  @Type(() => history_pengisianCreateWithoutStnkInput)
  create?: history_pengisianCreateWithoutStnkInput

  @Field(() => history_pengisianCreateOrConnectWithoutStnkInput, {
    nullable: true,
  })
  @Type(() => history_pengisianCreateOrConnectWithoutStnkInput)
  connectOrCreate?: history_pengisianCreateOrConnectWithoutStnkInput

  @Field(() => history_pengisianWhereUniqueInput, { nullable: true })
  @Type(() => history_pengisianWhereUniqueInput)
  connect?: Prisma.AtLeast<
    history_pengisianWhereUniqueInput,
    'kategori_pengisian' | 'nomor_stnk'
  >
}

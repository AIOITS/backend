import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StnkCreateWithoutHistory_pengisianInput } from './stnk-create-without-history-pengisian.input'
import { Type } from 'class-transformer'
import { StnkCreateOrConnectWithoutHistory_pengisianInput } from './stnk-create-or-connect-without-history-pengisian.input'
import { StnkUpsertWithoutHistory_pengisianInput } from './stnk-upsert-without-history-pengisian.input'
import { StnkWhereInput } from './stnk-where.input'
import { Prisma } from '@prisma/client'
import { StnkWhereUniqueInput } from './stnk-where-unique.input'
import { StnkUpdateToOneWithWhereWithoutHistory_pengisianInput } from './stnk-update-to-one-with-where-without-history-pengisian.input'

@InputType()
export class StnkUpdateOneWithoutHistory_pengisianNestedInput {
  @Field(() => StnkCreateWithoutHistory_pengisianInput, { nullable: true })
  @Type(() => StnkCreateWithoutHistory_pengisianInput)
  create?: StnkCreateWithoutHistory_pengisianInput

  @Field(() => StnkCreateOrConnectWithoutHistory_pengisianInput, {
    nullable: true,
  })
  @Type(() => StnkCreateOrConnectWithoutHistory_pengisianInput)
  connectOrCreate?: StnkCreateOrConnectWithoutHistory_pengisianInput

  @Field(() => StnkUpsertWithoutHistory_pengisianInput, { nullable: true })
  @Type(() => StnkUpsertWithoutHistory_pengisianInput)
  upsert?: StnkUpsertWithoutHistory_pengisianInput

  @Field(() => StnkWhereInput, { nullable: true })
  @Type(() => StnkWhereInput)
  disconnect?: StnkWhereInput

  @Field(() => StnkWhereInput, { nullable: true })
  @Type(() => StnkWhereInput)
  delete?: StnkWhereInput

  @Field(() => StnkWhereUniqueInput, { nullable: true })
  @Type(() => StnkWhereUniqueInput)
  connect?: Prisma.AtLeast<
    StnkWhereUniqueInput,
    'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'
  >

  @Field(() => StnkUpdateToOneWithWhereWithoutHistory_pengisianInput, {
    nullable: true,
  })
  @Type(() => StnkUpdateToOneWithWhereWithoutHistory_pengisianInput)
  update?: StnkUpdateToOneWithWhereWithoutHistory_pengisianInput
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StnkCreateWithoutKtpInput } from './stnk-create-without-ktp.input'
import { Type } from 'class-transformer'
import { StnkCreateOrConnectWithoutKtpInput } from './stnk-create-or-connect-without-ktp.input'
import { StnkUpsertWithWhereUniqueWithoutKtpInput } from './stnk-upsert-with-where-unique-without-ktp.input'
import { StnkCreateManyKtpInputEnvelope } from './stnk-create-many-ktp-input-envelope.input'
import { Prisma } from '@prisma/client'
import { StnkWhereUniqueInput } from './stnk-where-unique.input'
import { StnkUpdateWithWhereUniqueWithoutKtpInput } from './stnk-update-with-where-unique-without-ktp.input'
import { StnkUpdateManyWithWhereWithoutKtpInput } from './stnk-update-many-with-where-without-ktp.input'
import { StnkScalarWhereInput } from './stnk-scalar-where.input'

@InputType()
export class StnkUpdateManyWithoutKtpNestedInput {
  @Field(() => [StnkCreateWithoutKtpInput], { nullable: true })
  @Type(() => StnkCreateWithoutKtpInput)
  create?: Array<StnkCreateWithoutKtpInput>

  @Field(() => [StnkCreateOrConnectWithoutKtpInput], { nullable: true })
  @Type(() => StnkCreateOrConnectWithoutKtpInput)
  connectOrCreate?: Array<StnkCreateOrConnectWithoutKtpInput>

  @Field(() => [StnkUpsertWithWhereUniqueWithoutKtpInput], { nullable: true })
  @Type(() => StnkUpsertWithWhereUniqueWithoutKtpInput)
  upsert?: Array<StnkUpsertWithWhereUniqueWithoutKtpInput>

  @Field(() => StnkCreateManyKtpInputEnvelope, { nullable: true })
  @Type(() => StnkCreateManyKtpInputEnvelope)
  createMany?: StnkCreateManyKtpInputEnvelope

  @Field(() => [StnkWhereUniqueInput], { nullable: true })
  @Type(() => StnkWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<
      StnkWhereUniqueInput,
      'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'
    >
  >

  @Field(() => [StnkWhereUniqueInput], { nullable: true })
  @Type(() => StnkWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<
      StnkWhereUniqueInput,
      'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'
    >
  >

  @Field(() => [StnkWhereUniqueInput], { nullable: true })
  @Type(() => StnkWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<
      StnkWhereUniqueInput,
      'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'
    >
  >

  @Field(() => [StnkWhereUniqueInput], { nullable: true })
  @Type(() => StnkWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<
      StnkWhereUniqueInput,
      'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'
    >
  >

  @Field(() => [StnkUpdateWithWhereUniqueWithoutKtpInput], { nullable: true })
  @Type(() => StnkUpdateWithWhereUniqueWithoutKtpInput)
  update?: Array<StnkUpdateWithWhereUniqueWithoutKtpInput>

  @Field(() => [StnkUpdateManyWithWhereWithoutKtpInput], { nullable: true })
  @Type(() => StnkUpdateManyWithWhereWithoutKtpInput)
  updateMany?: Array<StnkUpdateManyWithWhereWithoutKtpInput>

  @Field(() => [StnkScalarWhereInput], { nullable: true })
  @Type(() => StnkScalarWhereInput)
  deleteMany?: Array<StnkScalarWhereInput>
}

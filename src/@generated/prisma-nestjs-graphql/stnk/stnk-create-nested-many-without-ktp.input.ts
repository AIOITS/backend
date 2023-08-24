import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StnkCreateWithoutKtpInput } from './stnk-create-without-ktp.input'
import { Type } from 'class-transformer'
import { StnkCreateOrConnectWithoutKtpInput } from './stnk-create-or-connect-without-ktp.input'
import { StnkCreateManyKtpInputEnvelope } from './stnk-create-many-ktp-input-envelope.input'
import { Prisma } from '@prisma/client'
import { StnkWhereUniqueInput } from './stnk-where-unique.input'

@InputType()
export class StnkCreateNestedManyWithoutKtpInput {
  @Field(() => [StnkCreateWithoutKtpInput], { nullable: true })
  @Type(() => StnkCreateWithoutKtpInput)
  create?: Array<StnkCreateWithoutKtpInput>

  @Field(() => [StnkCreateOrConnectWithoutKtpInput], { nullable: true })
  @Type(() => StnkCreateOrConnectWithoutKtpInput)
  connectOrCreate?: Array<StnkCreateOrConnectWithoutKtpInput>

  @Field(() => StnkCreateManyKtpInputEnvelope, { nullable: true })
  @Type(() => StnkCreateManyKtpInputEnvelope)
  createMany?: StnkCreateManyKtpInputEnvelope

  @Field(() => [StnkWhereUniqueInput], { nullable: true })
  @Type(() => StnkWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<
      StnkWhereUniqueInput,
      'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'
    >
  >
}

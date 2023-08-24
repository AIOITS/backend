import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SimCreateWithoutKtpInput } from './sim-create-without-ktp.input'
import { Type } from 'class-transformer'
import { SimCreateOrConnectWithoutKtpInput } from './sim-create-or-connect-without-ktp.input'
import { SimCreateManyKtpInputEnvelope } from './sim-create-many-ktp-input-envelope.input'
import { Prisma } from '@prisma/client'
import { SimWhereUniqueInput } from './sim-where-unique.input'

@InputType()
export class SimUncheckedCreateNestedManyWithoutKtpInput {
  @Field(() => [SimCreateWithoutKtpInput], { nullable: true })
  @Type(() => SimCreateWithoutKtpInput)
  create?: Array<SimCreateWithoutKtpInput>

  @Field(() => [SimCreateOrConnectWithoutKtpInput], { nullable: true })
  @Type(() => SimCreateOrConnectWithoutKtpInput)
  connectOrCreate?: Array<SimCreateOrConnectWithoutKtpInput>

  @Field(() => SimCreateManyKtpInputEnvelope, { nullable: true })
  @Type(() => SimCreateManyKtpInputEnvelope)
  createMany?: SimCreateManyKtpInputEnvelope

  @Field(() => [SimWhereUniqueInput], { nullable: true })
  @Type(() => SimWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>>
}

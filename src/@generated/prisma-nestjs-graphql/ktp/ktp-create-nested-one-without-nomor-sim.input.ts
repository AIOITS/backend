import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KtpCreateWithoutNomor_simInput } from './ktp-create-without-nomor-sim.input'
import { Type } from 'class-transformer'
import { KtpCreateOrConnectWithoutNomor_simInput } from './ktp-create-or-connect-without-nomor-sim.input'
import { Prisma } from '@prisma/client'
import { KtpWhereUniqueInput } from './ktp-where-unique.input'

@InputType()
export class KtpCreateNestedOneWithoutNomor_simInput {
  @Field(() => KtpCreateWithoutNomor_simInput, { nullable: true })
  @Type(() => KtpCreateWithoutNomor_simInput)
  create?: KtpCreateWithoutNomor_simInput

  @Field(() => KtpCreateOrConnectWithoutNomor_simInput, { nullable: true })
  @Type(() => KtpCreateOrConnectWithoutNomor_simInput)
  connectOrCreate?: KtpCreateOrConnectWithoutNomor_simInput

  @Field(() => KtpWhereUniqueInput, { nullable: true })
  @Type(() => KtpWhereUniqueInput)
  connect?: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>
}

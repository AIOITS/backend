import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KtpCreateWithoutNomor_stnkInput } from './ktp-create-without-nomor-stnk.input'
import { Type } from 'class-transformer'
import { KtpCreateOrConnectWithoutNomor_stnkInput } from './ktp-create-or-connect-without-nomor-stnk.input'
import { Prisma } from '@prisma/client'
import { KtpWhereUniqueInput } from './ktp-where-unique.input'

@InputType()
export class KtpCreateNestedOneWithoutNomor_stnkInput {
  @Field(() => KtpCreateWithoutNomor_stnkInput, { nullable: true })
  @Type(() => KtpCreateWithoutNomor_stnkInput)
  create?: KtpCreateWithoutNomor_stnkInput

  @Field(() => KtpCreateOrConnectWithoutNomor_stnkInput, { nullable: true })
  @Type(() => KtpCreateOrConnectWithoutNomor_stnkInput)
  connectOrCreate?: KtpCreateOrConnectWithoutNomor_stnkInput

  @Field(() => KtpWhereUniqueInput, { nullable: true })
  @Type(() => KtpWhereUniqueInput)
  connect?: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>
}

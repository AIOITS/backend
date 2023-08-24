import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { KtpWhereUniqueInput } from './ktp-where-unique.input'
import { Type } from 'class-transformer'
import { KtpCreateWithoutNomor_stnkInput } from './ktp-create-without-nomor-stnk.input'

@InputType()
export class KtpCreateOrConnectWithoutNomor_stnkInput {
  @Field(() => KtpWhereUniqueInput, { nullable: false })
  @Type(() => KtpWhereUniqueInput)
  where!: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>

  @Field(() => KtpCreateWithoutNomor_stnkInput, { nullable: false })
  @Type(() => KtpCreateWithoutNomor_stnkInput)
  create!: KtpCreateWithoutNomor_stnkInput
}

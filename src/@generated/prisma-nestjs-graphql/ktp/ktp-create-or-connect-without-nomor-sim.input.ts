import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { KtpWhereUniqueInput } from './ktp-where-unique.input'
import { Type } from 'class-transformer'
import { KtpCreateWithoutNomor_simInput } from './ktp-create-without-nomor-sim.input'

@InputType()
export class KtpCreateOrConnectWithoutNomor_simInput {
  @Field(() => KtpWhereUniqueInput, { nullable: false })
  @Type(() => KtpWhereUniqueInput)
  where!: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>

  @Field(() => KtpCreateWithoutNomor_simInput, { nullable: false })
  @Type(() => KtpCreateWithoutNomor_simInput)
  create!: KtpCreateWithoutNomor_simInput
}

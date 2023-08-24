import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KtpCreateWithoutNomor_simInput } from './ktp-create-without-nomor-sim.input'
import { Type } from 'class-transformer'
import { KtpCreateOrConnectWithoutNomor_simInput } from './ktp-create-or-connect-without-nomor-sim.input'
import { KtpUpsertWithoutNomor_simInput } from './ktp-upsert-without-nomor-sim.input'
import { KtpWhereInput } from './ktp-where.input'
import { Prisma } from '@prisma/client'
import { KtpWhereUniqueInput } from './ktp-where-unique.input'
import { KtpUpdateToOneWithWhereWithoutNomor_simInput } from './ktp-update-to-one-with-where-without-nomor-sim.input'

@InputType()
export class KtpUpdateOneWithoutNomor_simNestedInput {
  @Field(() => KtpCreateWithoutNomor_simInput, { nullable: true })
  @Type(() => KtpCreateWithoutNomor_simInput)
  create?: KtpCreateWithoutNomor_simInput

  @Field(() => KtpCreateOrConnectWithoutNomor_simInput, { nullable: true })
  @Type(() => KtpCreateOrConnectWithoutNomor_simInput)
  connectOrCreate?: KtpCreateOrConnectWithoutNomor_simInput

  @Field(() => KtpUpsertWithoutNomor_simInput, { nullable: true })
  @Type(() => KtpUpsertWithoutNomor_simInput)
  upsert?: KtpUpsertWithoutNomor_simInput

  @Field(() => KtpWhereInput, { nullable: true })
  @Type(() => KtpWhereInput)
  disconnect?: KtpWhereInput

  @Field(() => KtpWhereInput, { nullable: true })
  @Type(() => KtpWhereInput)
  delete?: KtpWhereInput

  @Field(() => KtpWhereUniqueInput, { nullable: true })
  @Type(() => KtpWhereUniqueInput)
  connect?: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>

  @Field(() => KtpUpdateToOneWithWhereWithoutNomor_simInput, { nullable: true })
  @Type(() => KtpUpdateToOneWithWhereWithoutNomor_simInput)
  update?: KtpUpdateToOneWithWhereWithoutNomor_simInput
}

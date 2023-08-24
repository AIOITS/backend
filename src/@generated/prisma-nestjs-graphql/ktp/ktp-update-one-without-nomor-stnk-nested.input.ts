import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KtpCreateWithoutNomor_stnkInput } from './ktp-create-without-nomor-stnk.input'
import { Type } from 'class-transformer'
import { KtpCreateOrConnectWithoutNomor_stnkInput } from './ktp-create-or-connect-without-nomor-stnk.input'
import { KtpUpsertWithoutNomor_stnkInput } from './ktp-upsert-without-nomor-stnk.input'
import { KtpWhereInput } from './ktp-where.input'
import { Prisma } from '@prisma/client'
import { KtpWhereUniqueInput } from './ktp-where-unique.input'
import { KtpUpdateToOneWithWhereWithoutNomor_stnkInput } from './ktp-update-to-one-with-where-without-nomor-stnk.input'

@InputType()
export class KtpUpdateOneWithoutNomor_stnkNestedInput {
  @Field(() => KtpCreateWithoutNomor_stnkInput, { nullable: true })
  @Type(() => KtpCreateWithoutNomor_stnkInput)
  create?: KtpCreateWithoutNomor_stnkInput

  @Field(() => KtpCreateOrConnectWithoutNomor_stnkInput, { nullable: true })
  @Type(() => KtpCreateOrConnectWithoutNomor_stnkInput)
  connectOrCreate?: KtpCreateOrConnectWithoutNomor_stnkInput

  @Field(() => KtpUpsertWithoutNomor_stnkInput, { nullable: true })
  @Type(() => KtpUpsertWithoutNomor_stnkInput)
  upsert?: KtpUpsertWithoutNomor_stnkInput

  @Field(() => KtpWhereInput, { nullable: true })
  @Type(() => KtpWhereInput)
  disconnect?: KtpWhereInput

  @Field(() => KtpWhereInput, { nullable: true })
  @Type(() => KtpWhereInput)
  delete?: KtpWhereInput

  @Field(() => KtpWhereUniqueInput, { nullable: true })
  @Type(() => KtpWhereUniqueInput)
  connect?: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>

  @Field(() => KtpUpdateToOneWithWhereWithoutNomor_stnkInput, {
    nullable: true,
  })
  @Type(() => KtpUpdateToOneWithWhereWithoutNomor_stnkInput)
  update?: KtpUpdateToOneWithWhereWithoutNomor_stnkInput
}

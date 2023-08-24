import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KtpUpdateWithoutNomor_stnkInput } from './ktp-update-without-nomor-stnk.input'
import { Type } from 'class-transformer'
import { KtpCreateWithoutNomor_stnkInput } from './ktp-create-without-nomor-stnk.input'
import { KtpWhereInput } from './ktp-where.input'

@InputType()
export class KtpUpsertWithoutNomor_stnkInput {
  @Field(() => KtpUpdateWithoutNomor_stnkInput, { nullable: false })
  @Type(() => KtpUpdateWithoutNomor_stnkInput)
  update!: KtpUpdateWithoutNomor_stnkInput

  @Field(() => KtpCreateWithoutNomor_stnkInput, { nullable: false })
  @Type(() => KtpCreateWithoutNomor_stnkInput)
  create!: KtpCreateWithoutNomor_stnkInput

  @Field(() => KtpWhereInput, { nullable: true })
  @Type(() => KtpWhereInput)
  where?: KtpWhereInput
}

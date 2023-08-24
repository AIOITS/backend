import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KtpUpdateWithoutNomor_simInput } from './ktp-update-without-nomor-sim.input'
import { Type } from 'class-transformer'
import { KtpCreateWithoutNomor_simInput } from './ktp-create-without-nomor-sim.input'
import { KtpWhereInput } from './ktp-where.input'

@InputType()
export class KtpUpsertWithoutNomor_simInput {
  @Field(() => KtpUpdateWithoutNomor_simInput, { nullable: false })
  @Type(() => KtpUpdateWithoutNomor_simInput)
  update!: KtpUpdateWithoutNomor_simInput

  @Field(() => KtpCreateWithoutNomor_simInput, { nullable: false })
  @Type(() => KtpCreateWithoutNomor_simInput)
  create!: KtpCreateWithoutNomor_simInput

  @Field(() => KtpWhereInput, { nullable: true })
  @Type(() => KtpWhereInput)
  where?: KtpWhereInput
}

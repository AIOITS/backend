import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KtpWhereInput } from './ktp-where.input'
import { Type } from 'class-transformer'
import { KtpUpdateWithoutNomor_stnkInput } from './ktp-update-without-nomor-stnk.input'

@InputType()
export class KtpUpdateToOneWithWhereWithoutNomor_stnkInput {
  @Field(() => KtpWhereInput, { nullable: true })
  @Type(() => KtpWhereInput)
  where?: KtpWhereInput

  @Field(() => KtpUpdateWithoutNomor_stnkInput, { nullable: false })
  @Type(() => KtpUpdateWithoutNomor_stnkInput)
  data!: KtpUpdateWithoutNomor_stnkInput
}

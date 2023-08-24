import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KtpWhereInput } from './ktp-where.input'
import { Type } from 'class-transformer'
import { KtpUpdateWithoutNomor_simInput } from './ktp-update-without-nomor-sim.input'

@InputType()
export class KtpUpdateToOneWithWhereWithoutNomor_simInput {
  @Field(() => KtpWhereInput, { nullable: true })
  @Type(() => KtpWhereInput)
  where?: KtpWhereInput

  @Field(() => KtpUpdateWithoutNomor_simInput, { nullable: false })
  @Type(() => KtpUpdateWithoutNomor_simInput)
  data!: KtpUpdateWithoutNomor_simInput
}

import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { KtpCreateInput } from './ktp-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOneKtpArgs {
  @Field(() => KtpCreateInput, { nullable: false })
  @Type(() => KtpCreateInput)
  data!: KtpCreateInput
}

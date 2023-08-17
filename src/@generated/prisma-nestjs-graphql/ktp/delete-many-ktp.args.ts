import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { KtpWhereInput } from './ktp-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyKtpArgs {
  @Field(() => KtpWhereInput, { nullable: true })
  @Type(() => KtpWhereInput)
  where?: KtpWhereInput
}

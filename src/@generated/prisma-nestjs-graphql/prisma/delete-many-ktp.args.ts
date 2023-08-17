import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { KTPWhereInput } from '../ktp/ktp-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyKtpArgs {
  @Field(() => KTPWhereInput, { nullable: true })
  @Type(() => KTPWhereInput)
  where?: KTPWhereInput
}

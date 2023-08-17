import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { KTPWhereUniqueInput } from '../ktp/ktp-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteOneKtpArgs {
  @Field(() => KTPWhereUniqueInput, { nullable: false })
  @Type(() => KTPWhereUniqueInput)
  where!: KTPWhereUniqueInput
}

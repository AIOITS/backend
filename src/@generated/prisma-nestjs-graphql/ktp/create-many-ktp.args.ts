import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { KtpCreateManyInput } from './ktp-create-many.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateManyKtpArgs {
  @Field(() => [KtpCreateManyInput], { nullable: false })
  @Type(() => KtpCreateManyInput)
  data!: Array<KtpCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

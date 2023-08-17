import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KtpWhereInput } from './ktp-where.input'
import { Type } from 'class-transformer'
import { KtpUpdateWithoutUserInput } from './ktp-update-without-user.input'

@InputType()
export class KtpUpdateToOneWithWhereWithoutUserInput {
  @Field(() => KtpWhereInput, { nullable: true })
  @Type(() => KtpWhereInput)
  where?: KtpWhereInput

  @Field(() => KtpUpdateWithoutUserInput, { nullable: false })
  @Type(() => KtpUpdateWithoutUserInput)
  data!: KtpUpdateWithoutUserInput
}

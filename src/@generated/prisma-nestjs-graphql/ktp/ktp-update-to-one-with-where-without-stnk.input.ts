import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KtpWhereInput } from './ktp-where.input'
import { Type } from 'class-transformer'
import { KtpUpdateWithoutStnkInput } from './ktp-update-without-stnk.input'

@InputType()
export class KtpUpdateToOneWithWhereWithoutStnkInput {
  @Field(() => KtpWhereInput, { nullable: true })
  @Type(() => KtpWhereInput)
  where?: KtpWhereInput

  @Field(() => KtpUpdateWithoutStnkInput, { nullable: false })
  @Type(() => KtpUpdateWithoutStnkInput)
  data!: KtpUpdateWithoutStnkInput
}

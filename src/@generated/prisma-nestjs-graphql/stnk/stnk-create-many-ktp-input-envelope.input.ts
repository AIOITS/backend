import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StnkCreateManyKtpInput } from './stnk-create-many-ktp.input'
import { Type } from 'class-transformer'

@InputType()
export class StnkCreateManyKtpInputEnvelope {
  @Field(() => [StnkCreateManyKtpInput], { nullable: false })
  @Type(() => StnkCreateManyKtpInput)
  data!: Array<StnkCreateManyKtpInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

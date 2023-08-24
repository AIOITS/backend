import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SimCreateManyKtpInput } from './sim-create-many-ktp.input'
import { Type } from 'class-transformer'

@InputType()
export class SimCreateManyKtpInputEnvelope {
  @Field(() => [SimCreateManyKtpInput], { nullable: false })
  @Type(() => SimCreateManyKtpInput)
  data!: Array<SimCreateManyKtpInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

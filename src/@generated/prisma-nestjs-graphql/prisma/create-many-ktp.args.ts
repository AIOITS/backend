import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { KTPCreateManyInput } from '../ktp/ktp-create-many.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateManyKtpArgs {
  @Field(() => [KTPCreateManyInput], { nullable: false })
  @Type(() => KTPCreateManyInput)
  data!: Array<KTPCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { KTPUpdateInput } from '../ktp/ktp-update.input'
import { Type } from 'class-transformer'
import { KTPWhereUniqueInput } from '../ktp/ktp-where-unique.input'

@ArgsType()
export class UpdateOneKtpArgs {
  @Field(() => KTPUpdateInput, { nullable: false })
  @Type(() => KTPUpdateInput)
  data!: KTPUpdateInput

  @Field(() => KTPWhereUniqueInput, { nullable: false })
  @Type(() => KTPWhereUniqueInput)
  where!: KTPWhereUniqueInput
}

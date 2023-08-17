import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { KTPWhereUniqueInput } from '../ktp/ktp-where-unique.input'
import { Type } from 'class-transformer'
import { KTPCreateInput } from '../ktp/ktp-create.input'
import { KTPUpdateInput } from '../ktp/ktp-update.input'

@ArgsType()
export class UpsertOneKtpArgs {
  @Field(() => KTPWhereUniqueInput, { nullable: false })
  @Type(() => KTPWhereUniqueInput)
  where!: KTPWhereUniqueInput

  @Field(() => KTPCreateInput, { nullable: false })
  @Type(() => KTPCreateInput)
  create!: KTPCreateInput

  @Field(() => KTPUpdateInput, { nullable: false })
  @Type(() => KTPUpdateInput)
  update!: KTPUpdateInput
}

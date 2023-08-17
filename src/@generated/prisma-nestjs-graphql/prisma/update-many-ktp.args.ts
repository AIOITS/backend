import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { KTPUpdateManyMutationInput } from '../ktp/ktp-update-many-mutation.input'
import { Type } from 'class-transformer'
import { KTPWhereInput } from '../ktp/ktp-where.input'

@ArgsType()
export class UpdateManyKtpArgs {
  @Field(() => KTPUpdateManyMutationInput, { nullable: false })
  @Type(() => KTPUpdateManyMutationInput)
  data!: KTPUpdateManyMutationInput

  @Field(() => KTPWhereInput, { nullable: true })
  @Type(() => KTPWhereInput)
  where?: KTPWhereInput
}

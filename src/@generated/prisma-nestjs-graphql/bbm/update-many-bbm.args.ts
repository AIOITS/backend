import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { BbmUpdateManyMutationInput } from './bbm-update-many-mutation.input'
import { Type } from 'class-transformer'
import { BbmWhereInput } from './bbm-where.input'

@ArgsType()
export class UpdateManyBbmArgs {
  @Field(() => BbmUpdateManyMutationInput, { nullable: false })
  @Type(() => BbmUpdateManyMutationInput)
  data!: BbmUpdateManyMutationInput

  @Field(() => BbmWhereInput, { nullable: true })
  @Type(() => BbmWhereInput)
  where?: BbmWhereInput
}

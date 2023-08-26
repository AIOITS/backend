import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { AjuanSubsidiUpdateManyMutationInput } from './ajuan-subsidi-update-many-mutation.input'
import { Type } from 'class-transformer'
import { AjuanSubsidiWhereInput } from './ajuan-subsidi-where.input'

@ArgsType()
export class UpdateManyAjuanSubsidiArgs {
  @Field(() => AjuanSubsidiUpdateManyMutationInput, { nullable: false })
  @Type(() => AjuanSubsidiUpdateManyMutationInput)
  data!: AjuanSubsidiUpdateManyMutationInput

  @Field(() => AjuanSubsidiWhereInput, { nullable: true })
  @Type(() => AjuanSubsidiWhereInput)
  where?: AjuanSubsidiWhereInput
}

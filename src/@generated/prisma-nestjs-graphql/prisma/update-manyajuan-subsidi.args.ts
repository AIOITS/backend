import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ajuan_subsidiUpdateManyMutationInput } from '../ajuan-subsidi/ajuan-subsidi-update-many-mutation.input'
import { Type } from 'class-transformer'
import { ajuan_subsidiWhereInput } from '../ajuan-subsidi/ajuan-subsidi-where.input'

@ArgsType()
export class UpdateManyajuanSubsidiArgs {
  @Field(() => ajuan_subsidiUpdateManyMutationInput, { nullable: false })
  @Type(() => ajuan_subsidiUpdateManyMutationInput)
  data!: ajuan_subsidiUpdateManyMutationInput

  @Field(() => ajuan_subsidiWhereInput, { nullable: true })
  @Type(() => ajuan_subsidiWhereInput)
  where?: ajuan_subsidiWhereInput
}

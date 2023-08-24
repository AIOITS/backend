import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ajuan_subsidiUpdateInput } from '../ajuan-subsidi/ajuan-subsidi-update.input'
import { Type } from 'class-transformer'
import { ajuan_subsidiWhereUniqueInput } from '../ajuan-subsidi/ajuan-subsidi-where-unique.input'

@ArgsType()
export class UpdateOneajuanSubsidiArgs {
  @Field(() => ajuan_subsidiUpdateInput, { nullable: false })
  @Type(() => ajuan_subsidiUpdateInput)
  data!: ajuan_subsidiUpdateInput

  @Field(() => ajuan_subsidiWhereUniqueInput, { nullable: false })
  @Type(() => ajuan_subsidiWhereUniqueInput)
  where!: ajuan_subsidiWhereUniqueInput
}

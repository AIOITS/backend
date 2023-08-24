import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ajuan_subsidiWhereUniqueInput } from '../ajuan-subsidi/ajuan-subsidi-where-unique.input'
import { Type } from 'class-transformer'
import { ajuan_subsidiCreateInput } from '../ajuan-subsidi/ajuan-subsidi-create.input'
import { ajuan_subsidiUpdateInput } from '../ajuan-subsidi/ajuan-subsidi-update.input'

@ArgsType()
export class UpsertOneajuanSubsidiArgs {
  @Field(() => ajuan_subsidiWhereUniqueInput, { nullable: false })
  @Type(() => ajuan_subsidiWhereUniqueInput)
  where!: ajuan_subsidiWhereUniqueInput

  @Field(() => ajuan_subsidiCreateInput, { nullable: false })
  @Type(() => ajuan_subsidiCreateInput)
  create!: ajuan_subsidiCreateInput

  @Field(() => ajuan_subsidiUpdateInput, { nullable: false })
  @Type(() => ajuan_subsidiUpdateInput)
  update!: ajuan_subsidiUpdateInput
}

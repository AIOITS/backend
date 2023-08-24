import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ajuan_subsidiWhereUniqueInput } from '../ajuan-subsidi/ajuan-subsidi-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class FindUniqueajuanSubsidiArgs {
  @Field(() => ajuan_subsidiWhereUniqueInput, { nullable: false })
  @Type(() => ajuan_subsidiWhereUniqueInput)
  where!: ajuan_subsidiWhereUniqueInput
}

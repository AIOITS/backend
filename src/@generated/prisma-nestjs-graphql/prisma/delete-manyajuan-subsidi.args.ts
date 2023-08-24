import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ajuan_subsidiWhereInput } from '../ajuan-subsidi/ajuan-subsidi-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyajuanSubsidiArgs {
  @Field(() => ajuan_subsidiWhereInput, { nullable: true })
  @Type(() => ajuan_subsidiWhereInput)
  where?: ajuan_subsidiWhereInput
}

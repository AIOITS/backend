import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ajuan_subsidiCreateInput } from '../ajuan-subsidi/ajuan-subsidi-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOneajuanSubsidiArgs {
  @Field(() => ajuan_subsidiCreateInput, { nullable: false })
  @Type(() => ajuan_subsidiCreateInput)
  data!: ajuan_subsidiCreateInput
}

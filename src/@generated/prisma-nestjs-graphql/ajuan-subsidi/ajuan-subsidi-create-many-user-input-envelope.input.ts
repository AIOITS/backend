import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AjuanSubsidiCreateManyUserInput } from './ajuan-subsidi-create-many-user.input'
import { Type } from 'class-transformer'

@InputType()
export class AjuanSubsidiCreateManyUserInputEnvelope {
  @Field(() => [AjuanSubsidiCreateManyUserInput], { nullable: false })
  @Type(() => AjuanSubsidiCreateManyUserInput)
  data!: Array<AjuanSubsidiCreateManyUserInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

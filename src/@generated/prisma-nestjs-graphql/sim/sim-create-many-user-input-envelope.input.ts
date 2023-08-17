import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SimCreateManyUserInput } from './sim-create-many-user.input'
import { Type } from 'class-transformer'

@InputType()
export class SimCreateManyUserInputEnvelope {
  @Field(() => [SimCreateManyUserInput], { nullable: false })
  @Type(() => SimCreateManyUserInput)
  data!: Array<SimCreateManyUserInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

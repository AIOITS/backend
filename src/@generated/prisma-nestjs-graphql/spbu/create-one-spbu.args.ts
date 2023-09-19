import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SpbuCreateInput } from './spbu-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOneSpbuArgs {
  @Field(() => SpbuCreateInput, { nullable: false })
  @Type(() => SpbuCreateInput)
  data!: SpbuCreateInput
}

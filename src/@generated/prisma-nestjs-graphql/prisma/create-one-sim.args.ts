import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SIMCreateInput } from '../sim/sim-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOneSimArgs {
  @Field(() => SIMCreateInput, { nullable: false })
  @Type(() => SIMCreateInput)
  data!: SIMCreateInput
}

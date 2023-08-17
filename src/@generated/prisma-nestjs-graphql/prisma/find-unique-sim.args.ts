import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SIMWhereUniqueInput } from '../sim/sim-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class FindUniqueSimArgs {
  @Field(() => SIMWhereUniqueInput, { nullable: false })
  @Type(() => SIMWhereUniqueInput)
  where!: SIMWhereUniqueInput
}

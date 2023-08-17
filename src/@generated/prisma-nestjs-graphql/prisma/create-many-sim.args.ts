import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SIMCreateManyInput } from '../sim/sim-create-many.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateManySimArgs {
  @Field(() => [SIMCreateManyInput], { nullable: false })
  @Type(() => SIMCreateManyInput)
  data!: Array<SIMCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

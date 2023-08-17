import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SIMUpdateManyMutationInput } from '../sim/sim-update-many-mutation.input'
import { Type } from 'class-transformer'
import { SIMWhereInput } from '../sim/sim-where.input'

@ArgsType()
export class UpdateManySimArgs {
  @Field(() => SIMUpdateManyMutationInput, { nullable: false })
  @Type(() => SIMUpdateManyMutationInput)
  data!: SIMUpdateManyMutationInput

  @Field(() => SIMWhereInput, { nullable: true })
  @Type(() => SIMWhereInput)
  where?: SIMWhereInput
}

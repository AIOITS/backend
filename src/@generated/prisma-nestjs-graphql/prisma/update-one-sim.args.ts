import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SIMUpdateInput } from '../sim/sim-update.input'
import { Type } from 'class-transformer'
import { SIMWhereUniqueInput } from '../sim/sim-where-unique.input'

@ArgsType()
export class UpdateOneSimArgs {
  @Field(() => SIMUpdateInput, { nullable: false })
  @Type(() => SIMUpdateInput)
  data!: SIMUpdateInput

  @Field(() => SIMWhereUniqueInput, { nullable: false })
  @Type(() => SIMWhereUniqueInput)
  where!: SIMWhereUniqueInput
}

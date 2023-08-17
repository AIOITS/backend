import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SIMWhereUniqueInput } from '../sim/sim-where-unique.input'
import { Type } from 'class-transformer'
import { SIMCreateInput } from '../sim/sim-create.input'
import { SIMUpdateInput } from '../sim/sim-update.input'

@ArgsType()
export class UpsertOneSimArgs {
  @Field(() => SIMWhereUniqueInput, { nullable: false })
  @Type(() => SIMWhereUniqueInput)
  where!: SIMWhereUniqueInput

  @Field(() => SIMCreateInput, { nullable: false })
  @Type(() => SIMCreateInput)
  create!: SIMCreateInput

  @Field(() => SIMUpdateInput, { nullable: false })
  @Type(() => SIMUpdateInput)
  update!: SIMUpdateInput
}

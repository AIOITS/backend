import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SimUpdateInput } from './sim-update.input'
import { Type } from 'class-transformer'
import { Prisma } from '@prisma/client'
import { SimWhereUniqueInput } from './sim-where-unique.input'

@ArgsType()
export class UpdateOneSimArgs {
  @Field(() => SimUpdateInput, { nullable: false })
  @Type(() => SimUpdateInput)
  data!: SimUpdateInput

  @Field(() => SimWhereUniqueInput, { nullable: false })
  @Type(() => SimWhereUniqueInput)
  where!: Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>
}

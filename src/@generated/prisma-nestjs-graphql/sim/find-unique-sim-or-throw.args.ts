import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SimWhereUniqueInput } from './sim-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class FindUniqueSimOrThrowArgs {
  @Field(() => SimWhereUniqueInput, { nullable: false })
  @Type(() => SimWhereUniqueInput)
  where!: Prisma.AtLeast<SimWhereUniqueInput, 'nomor_sim'>
}

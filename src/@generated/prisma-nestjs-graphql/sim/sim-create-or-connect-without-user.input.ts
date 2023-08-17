import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SimWhereUniqueInput } from './sim-where-unique.input'
import { Type } from 'class-transformer'
import { SimCreateWithoutUserInput } from './sim-create-without-user.input'

@InputType()
export class SimCreateOrConnectWithoutUserInput {
  @Field(() => SimWhereUniqueInput, { nullable: false })
  @Type(() => SimWhereUniqueInput)
  where!: Prisma.AtLeast<SimWhereUniqueInput, 'nomor_sim'>

  @Field(() => SimCreateWithoutUserInput, { nullable: false })
  @Type(() => SimCreateWithoutUserInput)
  create!: SimCreateWithoutUserInput
}

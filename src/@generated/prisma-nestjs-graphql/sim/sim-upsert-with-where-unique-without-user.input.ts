import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SimWhereUniqueInput } from './sim-where-unique.input'
import { Type } from 'class-transformer'
import { SimUpdateWithoutUserInput } from './sim-update-without-user.input'
import { SimCreateWithoutUserInput } from './sim-create-without-user.input'

@InputType()
export class SimUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => SimWhereUniqueInput, { nullable: false })
  @Type(() => SimWhereUniqueInput)
  where!: Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>

  @Field(() => SimUpdateWithoutUserInput, { nullable: false })
  @Type(() => SimUpdateWithoutUserInput)
  update!: SimUpdateWithoutUserInput

  @Field(() => SimCreateWithoutUserInput, { nullable: false })
  @Type(() => SimCreateWithoutUserInput)
  create!: SimCreateWithoutUserInput
}

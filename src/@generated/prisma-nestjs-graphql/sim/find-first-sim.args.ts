import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SimWhereInput } from './sim-where.input'
import { Type } from 'class-transformer'
import { SimOrderByWithRelationInput } from './sim-order-by-with-relation.input'
import { Prisma } from '@prisma/client'
import { SimWhereUniqueInput } from './sim-where-unique.input'
import { Int } from '@nestjs/graphql'
import { SimScalarFieldEnum } from './sim-scalar-field.enum'

@ArgsType()
export class FindFirstSimArgs {
  @Field(() => SimWhereInput, { nullable: true })
  @Type(() => SimWhereInput)
  where?: SimWhereInput

  @Field(() => [SimOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<SimOrderByWithRelationInput>

  @Field(() => SimWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<SimWhereUniqueInput, 'nomor_sim'>

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [SimScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof SimScalarFieldEnum>
}

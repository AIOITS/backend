import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PkbWhereInput } from './pkb-where.input'
import { Type } from 'class-transformer'
import { PkbOrderByWithRelationInput } from './pkb-order-by-with-relation.input'
import { Prisma } from '@prisma/client'
import { PkbWhereUniqueInput } from './pkb-where-unique.input'
import { Int } from '@nestjs/graphql'
import { PkbScalarFieldEnum } from './pkb-scalar-field.enum'

@ArgsType()
export class FindFirstPkbArgs {
  @Field(() => PkbWhereInput, { nullable: true })
  @Type(() => PkbWhereInput)
  where?: PkbWhereInput

  @Field(() => [PkbOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PkbOrderByWithRelationInput>

  @Field(() => PkbWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<PkbWhereUniqueInput, 'nomor_pkb'>

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [PkbScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PkbScalarFieldEnum>
}

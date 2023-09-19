import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SpbuWhereInput } from './spbu-where.input'
import { Type } from 'class-transformer'
import { SpbuOrderByWithRelationInput } from './spbu-order-by-with-relation.input'
import { Prisma } from '@prisma/client'
import { SpbuWhereUniqueInput } from './spbu-where-unique.input'
import { Int } from '@nestjs/graphql'
import { SpbuScalarFieldEnum } from './spbu-scalar-field.enum'

@ArgsType()
export class FindFirstSpbuArgs {
  @Field(() => SpbuWhereInput, { nullable: true })
  @Type(() => SpbuWhereInput)
  where?: SpbuWhereInput

  @Field(() => [SpbuOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<SpbuOrderByWithRelationInput>

  @Field(() => SpbuWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<SpbuWhereUniqueInput, 'id'>

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [SpbuScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof SpbuScalarFieldEnum>
}

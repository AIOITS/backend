import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { HistoryPengisianWhereInput } from './history-pengisian-where.input'
import { Type } from 'class-transformer'
import { HistoryPengisianOrderByWithRelationInput } from './history-pengisian-order-by-with-relation.input'
import { Prisma } from '@prisma/client'
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input'
import { Int } from '@nestjs/graphql'
import { HistoryPengisianScalarFieldEnum } from './history-pengisian-scalar-field.enum'

@ArgsType()
export class FindFirstHistoryPengisianArgs {
  @Field(() => HistoryPengisianWhereInput, { nullable: true })
  @Type(() => HistoryPengisianWhereInput)
  where?: HistoryPengisianWhereInput

  @Field(() => [HistoryPengisianOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<HistoryPengisianOrderByWithRelationInput>

  @Field(() => HistoryPengisianWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [HistoryPengisianScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof HistoryPengisianScalarFieldEnum>
}

import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { STNKWhereInput } from '../stnk/stnk-where.input'
import { Type } from 'class-transformer'
import { STNKOrderByWithRelationInput } from '../stnk/stnk-order-by-with-relation.input'
import { STNKWhereUniqueInput } from '../stnk/stnk-where-unique.input'
import { Int } from '@nestjs/graphql'

@ArgsType()
export class AggregateStnkArgs {
  @Field(() => STNKWhereInput, { nullable: true })
  @Type(() => STNKWhereInput)
  where?: STNKWhereInput

  @Field(() => [STNKOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<STNKOrderByWithRelationInput>

  @Field(() => STNKWhereUniqueInput, { nullable: true })
  cursor?: STNKWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number
}

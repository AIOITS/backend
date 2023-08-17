import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PKBWhereInput } from '../pkb/pkb-where.input'
import { Type } from 'class-transformer'
import { PKBOrderByWithRelationInput } from '../pkb/pkb-order-by-with-relation.input'
import { PKBWhereUniqueInput } from '../pkb/pkb-where-unique.input'
import { Int } from '@nestjs/graphql'
import { PKBScalarFieldEnum } from '../pkb/pkb-scalar-field.enum'

@ArgsType()
export class FindManyPkbArgs {
  @Field(() => PKBWhereInput, { nullable: true })
  @Type(() => PKBWhereInput)
  where?: PKBWhereInput

  @Field(() => [PKBOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PKBOrderByWithRelationInput>

  @Field(() => PKBWhereUniqueInput, { nullable: true })
  cursor?: PKBWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [PKBScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PKBScalarFieldEnum>
}

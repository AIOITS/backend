import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ajuan_subsidiWhereInput } from '../ajuan-subsidi/ajuan-subsidi-where.input'
import { Type } from 'class-transformer'
import { ajuan_subsidiOrderByWithRelationInput } from '../ajuan-subsidi/ajuan-subsidi-order-by-with-relation.input'
import { ajuan_subsidiWhereUniqueInput } from '../ajuan-subsidi/ajuan-subsidi-where-unique.input'
import { Int } from '@nestjs/graphql'
import { Ajuan_subsidiScalarFieldEnum } from './ajuan-subsidi-scalar-field.enum'

@ArgsType()
export class FindFirstajuanSubsidiOrThrowArgs {
  @Field(() => ajuan_subsidiWhereInput, { nullable: true })
  @Type(() => ajuan_subsidiWhereInput)
  where?: ajuan_subsidiWhereInput

  @Field(() => [ajuan_subsidiOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ajuan_subsidiOrderByWithRelationInput>

  @Field(() => ajuan_subsidiWhereUniqueInput, { nullable: true })
  cursor?: ajuan_subsidiWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [Ajuan_subsidiScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof Ajuan_subsidiScalarFieldEnum>
}

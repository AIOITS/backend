import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { FileWhereInput } from './file-where.input'
import { StringFilter } from '../prisma/string-filter.input'
import { IntNullableFilter } from '../prisma/int-nullable-filter.input'
import { AjuanSubsidiNullableRelationFilter } from '../ajuan-subsidi/ajuan-subsidi-nullable-relation-filter.input'

@InputType()
export class FileWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => [FileWhereInput], { nullable: true })
  AND?: Array<FileWhereInput>

  @Field(() => [FileWhereInput], { nullable: true })
  OR?: Array<FileWhereInput>

  @Field(() => [FileWhereInput], { nullable: true })
  NOT?: Array<FileWhereInput>

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  url?: StringFilter

  @Field(() => IntNullableFilter, { nullable: true })
  ajuanSubsidi_id?: IntNullableFilter

  @Field(() => AjuanSubsidiNullableRelationFilter, { nullable: true })
  ajuanSubsidi?: AjuanSubsidiNullableRelationFilter
}

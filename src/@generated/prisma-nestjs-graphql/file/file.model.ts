import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { AjuanSubsidi } from '../ajuan-subsidi/ajuan-subsidi.model'

@ObjectType()
export class File {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  url!: string

  @Field(() => Int, { nullable: true })
  ajuanSubsidi_id!: number | null

  @Field(() => AjuanSubsidi, { nullable: true })
  ajuanSubsidi?: AjuanSubsidi | null
}

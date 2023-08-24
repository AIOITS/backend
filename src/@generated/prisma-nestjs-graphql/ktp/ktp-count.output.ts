import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class KtpCount {
  @Field(() => Int, { nullable: false })
  nomor_sim?: number

  @Field(() => Int, { nullable: false })
  nomor_stnk?: number
}

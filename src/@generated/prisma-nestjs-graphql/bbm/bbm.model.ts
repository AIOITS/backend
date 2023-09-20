import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'
import { HistoryPengisian } from '../history-pengisian/history-pengisian.model'
import { BbmCount } from './bbm-count.output'

@ObjectType()
export class Bbm {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  type!: string

  @Field(() => Float, { nullable: false })
  price_per_liter!: number

  @Field(() => [HistoryPengisian], { nullable: true })
  HistoryPengisian?: Array<HistoryPengisian>

  @Field(() => BbmCount, { nullable: false })
  _count?: BbmCount
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'
import { BbmCategory } from '../prisma/bbm-category.enum'

@InputType()
export class BbmCreateWithoutHistoryPengisianInput {
  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  type!: string

  @Field(() => Float, { nullable: false })
  price_per_liter!: number

  @Field(() => Boolean, { nullable: false })
  is_subsidi!: boolean

  @Field(() => BbmCategory, { nullable: false })
  category!: keyof typeof BbmCategory
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'
import { HistoryPengisianCreateNestedManyWithoutBbmInput } from '../history-pengisian/history-pengisian-create-nested-many-without-bbm.input'

@InputType()
export class BbmCreateInput {
  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  type!: string

  @Field(() => Float, { nullable: false })
  price_per_liter!: number

  @Field(() => HistoryPengisianCreateNestedManyWithoutBbmInput, {
    nullable: true,
  })
  HistoryPengisian?: HistoryPengisianCreateNestedManyWithoutBbmInput
}

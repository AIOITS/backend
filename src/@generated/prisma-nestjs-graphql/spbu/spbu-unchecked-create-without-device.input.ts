import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { HistoryPengisianUncheckedCreateNestedManyWithoutSpbuInput } from '../history-pengisian/history-pengisian-unchecked-create-nested-many-without-spbu.input'

@InputType()
export class SpbuUncheckedCreateWithoutDeviceInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  alamat!: string

  @Field(() => HistoryPengisianUncheckedCreateNestedManyWithoutSpbuInput, {
    nullable: true,
  })
  historyPengisian?: HistoryPengisianUncheckedCreateNestedManyWithoutSpbuInput
}

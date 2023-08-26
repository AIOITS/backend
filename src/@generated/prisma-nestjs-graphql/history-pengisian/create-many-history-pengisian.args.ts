import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { HistoryPengisianCreateManyInput } from './history-pengisian-create-many.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateManyHistoryPengisianArgs {
  @Field(() => [HistoryPengisianCreateManyInput], { nullable: false })
  @Type(() => HistoryPengisianCreateManyInput)
  data!: Array<HistoryPengisianCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

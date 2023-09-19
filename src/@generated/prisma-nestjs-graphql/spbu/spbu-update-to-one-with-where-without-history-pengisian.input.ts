import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SpbuWhereInput } from './spbu-where.input'
import { Type } from 'class-transformer'
import { SpbuUpdateWithoutHistoryPengisianInput } from './spbu-update-without-history-pengisian.input'

@InputType()
export class SpbuUpdateToOneWithWhereWithoutHistoryPengisianInput {
  @Field(() => SpbuWhereInput, { nullable: true })
  @Type(() => SpbuWhereInput)
  where?: SpbuWhereInput

  @Field(() => SpbuUpdateWithoutHistoryPengisianInput, { nullable: false })
  @Type(() => SpbuUpdateWithoutHistoryPengisianInput)
  data!: SpbuUpdateWithoutHistoryPengisianInput
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BbmWhereInput } from './bbm-where.input'
import { Type } from 'class-transformer'
import { BbmUpdateWithoutHistoryPengisianInput } from './bbm-update-without-history-pengisian.input'

@InputType()
export class BbmUpdateToOneWithWhereWithoutHistoryPengisianInput {
  @Field(() => BbmWhereInput, { nullable: true })
  @Type(() => BbmWhereInput)
  where?: BbmWhereInput

  @Field(() => BbmUpdateWithoutHistoryPengisianInput, { nullable: false })
  @Type(() => BbmUpdateWithoutHistoryPengisianInput)
  data!: BbmUpdateWithoutHistoryPengisianInput
}

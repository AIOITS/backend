import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StnkUpdateWithoutHistory_pengisianInput } from './stnk-update-without-history-pengisian.input'
import { Type } from 'class-transformer'
import { StnkCreateWithoutHistory_pengisianInput } from './stnk-create-without-history-pengisian.input'
import { StnkWhereInput } from './stnk-where.input'

@InputType()
export class StnkUpsertWithoutHistory_pengisianInput {
  @Field(() => StnkUpdateWithoutHistory_pengisianInput, { nullable: false })
  @Type(() => StnkUpdateWithoutHistory_pengisianInput)
  update!: StnkUpdateWithoutHistory_pengisianInput

  @Field(() => StnkCreateWithoutHistory_pengisianInput, { nullable: false })
  @Type(() => StnkCreateWithoutHistory_pengisianInput)
  create!: StnkCreateWithoutHistory_pengisianInput

  @Field(() => StnkWhereInput, { nullable: true })
  @Type(() => StnkWhereInput)
  where?: StnkWhereInput
}

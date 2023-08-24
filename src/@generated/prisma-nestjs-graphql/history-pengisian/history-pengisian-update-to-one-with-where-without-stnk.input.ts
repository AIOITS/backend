import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { history_pengisianWhereInput } from './history-pengisian-where.input'
import { Type } from 'class-transformer'
import { history_pengisianUpdateWithoutStnkInput } from './history-pengisian-update-without-stnk.input'

@InputType()
export class history_pengisianUpdateToOneWithWhereWithoutStnkInput {
  @Field(() => history_pengisianWhereInput, { nullable: true })
  @Type(() => history_pengisianWhereInput)
  where?: history_pengisianWhereInput

  @Field(() => history_pengisianUpdateWithoutStnkInput, { nullable: false })
  @Type(() => history_pengisianUpdateWithoutStnkInput)
  data!: history_pengisianUpdateWithoutStnkInput
}

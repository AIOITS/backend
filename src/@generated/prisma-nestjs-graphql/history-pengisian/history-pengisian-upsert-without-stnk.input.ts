import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { history_pengisianUpdateWithoutStnkInput } from './history-pengisian-update-without-stnk.input'
import { Type } from 'class-transformer'
import { history_pengisianCreateWithoutStnkInput } from './history-pengisian-create-without-stnk.input'
import { history_pengisianWhereInput } from './history-pengisian-where.input'

@InputType()
export class history_pengisianUpsertWithoutStnkInput {
  @Field(() => history_pengisianUpdateWithoutStnkInput, { nullable: false })
  @Type(() => history_pengisianUpdateWithoutStnkInput)
  update!: history_pengisianUpdateWithoutStnkInput

  @Field(() => history_pengisianCreateWithoutStnkInput, { nullable: false })
  @Type(() => history_pengisianCreateWithoutStnkInput)
  create!: history_pengisianCreateWithoutStnkInput

  @Field(() => history_pengisianWhereInput, { nullable: true })
  @Type(() => history_pengisianWhereInput)
  where?: history_pengisianWhereInput
}

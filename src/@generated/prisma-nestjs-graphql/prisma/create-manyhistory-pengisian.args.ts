import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { history_pengisianCreateManyInput } from '../history-pengisian/history-pengisian-create-many.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateManyhistoryPengisianArgs {
  @Field(() => [history_pengisianCreateManyInput], { nullable: false })
  @Type(() => history_pengisianCreateManyInput)
  data!: Array<history_pengisianCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

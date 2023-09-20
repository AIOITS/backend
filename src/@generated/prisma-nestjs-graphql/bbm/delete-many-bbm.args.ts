import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { BbmWhereInput } from './bbm-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyBbmArgs {
  @Field(() => BbmWhereInput, { nullable: true })
  @Type(() => BbmWhereInput)
  where?: BbmWhereInput
}

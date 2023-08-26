import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserWhereInput } from './user-where.input'
import { Type } from 'class-transformer'
import { UserUpdateWithoutHistory_pengisianInput } from './user-update-without-history-pengisian.input'

@InputType()
export class UserUpdateToOneWithWhereWithoutHistory_pengisianInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput

  @Field(() => UserUpdateWithoutHistory_pengisianInput, { nullable: false })
  @Type(() => UserUpdateWithoutHistory_pengisianInput)
  data!: UserUpdateWithoutHistory_pengisianInput
}

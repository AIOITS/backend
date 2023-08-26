import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserUpdateWithoutHistory_pengisianInput } from './user-update-without-history-pengisian.input'
import { Type } from 'class-transformer'
import { UserCreateWithoutHistory_pengisianInput } from './user-create-without-history-pengisian.input'
import { UserWhereInput } from './user-where.input'

@InputType()
export class UserUpsertWithoutHistory_pengisianInput {
  @Field(() => UserUpdateWithoutHistory_pengisianInput, { nullable: false })
  @Type(() => UserUpdateWithoutHistory_pengisianInput)
  update!: UserUpdateWithoutHistory_pengisianInput

  @Field(() => UserCreateWithoutHistory_pengisianInput, { nullable: false })
  @Type(() => UserCreateWithoutHistory_pengisianInput)
  create!: UserCreateWithoutHistory_pengisianInput

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserUpdateWithoutAjuan_subsidiInput } from './user-update-without-ajuan-subsidi.input'
import { Type } from 'class-transformer'
import { UserCreateWithoutAjuan_subsidiInput } from './user-create-without-ajuan-subsidi.input'
import { UserWhereInput } from './user-where.input'

@InputType()
export class UserUpsertWithoutAjuan_subsidiInput {
  @Field(() => UserUpdateWithoutAjuan_subsidiInput, { nullable: false })
  @Type(() => UserUpdateWithoutAjuan_subsidiInput)
  update!: UserUpdateWithoutAjuan_subsidiInput

  @Field(() => UserCreateWithoutAjuan_subsidiInput, { nullable: false })
  @Type(() => UserCreateWithoutAjuan_subsidiInput)
  create!: UserCreateWithoutAjuan_subsidiInput

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import * as Validator from 'class-validator'
import { Float } from '@nestjs/graphql'
import { HistoryPengisianUncheckedCreateNestedManyWithoutUserInput } from '../history-pengisian/history-pengisian-unchecked-create-nested-many-without-user.input'
import { AjuanSubsidiUncheckedCreateNestedManyWithoutUserInput } from '../ajuan-subsidi/ajuan-subsidi-unchecked-create-nested-many-without-user.input'

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  @Validator.MinLength(16)
  @Validator.MaxLength(16)
  nik!: string

  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  @Validator.MaxLength(60)
  name!: string

  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  @Validator.IsOptional()
  email?: string

  @Field(() => String, { nullable: true })
  @Validator.IsPhoneNumber('ID', {
    message: 'phone must be a valid Indoesia phone number',
  })
  @Validator.IsOptional()
  phone?: string

  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  password!: string

  @Field(() => Float, { nullable: true })
  kuota_subsidi?: number

  @Field(() => Int, { nullable: true })
  saldo?: number

  @Field(() => Int, { nullable: true })
  role?: number

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => HistoryPengisianUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  history_pengisian?: HistoryPengisianUncheckedCreateNestedManyWithoutUserInput

  @Field(() => AjuanSubsidiUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  ajuan_subsidi?: AjuanSubsidiUncheckedCreateNestedManyWithoutUserInput
}

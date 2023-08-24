import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import * as Validator from 'class-validator'
import { Float } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@InputType()
export class UserCreateWithoutKtpInput {
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
}

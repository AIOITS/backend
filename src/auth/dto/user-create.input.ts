import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import * as Validator from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

@InputType()
export class UserCreateInput {
  @ApiProperty({
    example: 'PKM Aioits',
  })
  @Field(() => String, { nullable: true })
  name: string

  @ApiPropertyOptional({
    example: 'pkmaioits@email.com',
  })
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  @Validator.IsOptional()
  email?: string

  @ApiPropertyOptional({
    example: '081234567890',
  })
  @Field(() => String, { nullable: true })
  @Validator.IsPhoneNumber('ID', {
    message: 'phone must be a valid Indoesia phone number',
  })
  @Validator.IsOptional()
  phone?: string

  @ApiProperty({
    example: 'rahasia',
  })
  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  password!: string

  @ApiProperty({
    example: '1234567890123456',
  })
  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  nik!: string
}

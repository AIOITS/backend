import { Type } from 'class-transformer'
import {
  IsDateString,
  IsEmail,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator'

export class LoginAuthDto {
  @IsEmail()
  @IsOptional()
  readonly email?: string

  @IsOptional()
  @Type(() => Number)
  @IsPhoneNumber('ID', {
    message: 'phone must be a valid Indoesia phone number',
  })
  readonly phone: string

  @IsNotEmpty()
  readonly password: string
}

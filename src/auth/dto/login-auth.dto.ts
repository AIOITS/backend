import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber } from 'class-validator'

export class LoginAuthDto {
  @IsEmail()
  @IsOptional()
  readonly email?: string
  
  @IsOptional()
  @IsPhoneNumber('ID', {
    message: 'phone must be a valid Indoesia phone number'
  })
  readonly phone: string

  @IsNotEmpty()
  readonly password: string
}

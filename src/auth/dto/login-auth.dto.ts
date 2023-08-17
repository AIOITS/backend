import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber } from 'class-validator'

export class LoginAuthDto {
  @ApiProperty({
    example: 'pkmaioits@email.com'
  })
  @IsEmail()
  @IsOptional()
  readonly email?: string

  @ApiProperty({
    example: '081234567890'
  })
  @IsOptional()
  @IsPhoneNumber('ID', {
    message: 'phone must be a valid Indoesia phone number',
  })
  readonly phone: string

  @ApiProperty({
    example: 'rahasia'
  })
  @IsNotEmpty()
  readonly password: string
}

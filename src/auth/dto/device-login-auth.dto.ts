import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator'

export class DeviceLoginAuthDto {
  @ApiProperty({
    example: '00:1A:2B:3C:4D:5E',
  })
  @IsNotEmpty()
  @IsString()
  readonly deviceId?: string

  @ApiProperty({
    example: '123abf56e',
  })
  @IsString()
  @IsNotEmpty()
  readonly uid: string
}

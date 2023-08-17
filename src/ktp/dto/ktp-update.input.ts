import { Agama } from 'src/@generated/prisma-nestjs-graphql/prisma/agama.enum'
import { StatusPerkawinan } from 'src/@generated/prisma-nestjs-graphql/prisma/status-perkawinan.enum'
import {
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { GolonganDarah } from '@prisma/client'

export class KtpUpdateInput {
  @IsOptional()
  @ApiPropertyOptional({
    example: 'John Doe',
    description: 'optional',
  })
  @IsNotEmpty()
  @IsString()
  readonly nama?: string

  @IsOptional()
  @ApiPropertyOptional({
    example: 'Jakarta',
    description: 'optional',
  })
  @IsNotEmpty()
  @IsString()
  readonly tempat_lahir?: string

  @IsOptional()
  @ApiPropertyOptional({
    example: '1990-01-01',
    description: 'optional',
  })
  @IsNotEmpty()
  @IsISO8601({ strict: true })
  readonly tanggal_lahir?: string

  @IsOptional()
  @ApiPropertyOptional({
    example: 'Jl. Main Street',
    description: 'optional',
  })
  @IsNotEmpty()
  @IsString()
  readonly alamat?: string

  @IsOptional()
  @ApiPropertyOptional({
    example: 1,
    description: 'optional',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly rt?: number

  @IsOptional()
  @ApiPropertyOptional({
    example: 2,
    description: 'optional',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly rw?: number

  @IsOptional()
  @ApiPropertyOptional({
    example: 'Keputih',
    description: 'optional',
  })
  @IsNotEmpty()
  @IsString()
  readonly kelurahan_desa?: string

  @IsOptional()
  @ApiPropertyOptional({
    example: 'Sukolilo',
    description: 'optional',
  })
  @IsNotEmpty()
  @IsString()
  readonly kecamatan?: string

  @IsOptional()
  @ApiPropertyOptional({
    example: 'Surabaya',
    description: 'optional',
  })
  @IsNotEmpty()
  @IsString()
  readonly kabupaten_kota?: string

  @IsOptional()
  @ApiPropertyOptional({
    example: 'Jawa Timur',
    description: 'optional',
  })
  @IsNotEmpty()
  @IsString()
  readonly provinsi?: string

  @IsOptional()
  @ApiPropertyOptional({
    enum: GolonganDarah,
    example: 'A',
    description: 'optional',
  })
  @IsNotEmpty()
  @IsEnum(GolonganDarah)
  readonly golongan_darah?: keyof typeof GolonganDarah

  @IsOptional()
  @ApiPropertyOptional({
    enum: Agama,
    example: 'Islam',
    description: 'optional',
  })
  @IsNotEmpty()
  @IsEnum(Agama)
  readonly agama?: keyof typeof Agama

  @IsOptional()
  @ApiPropertyOptional({
    enum: StatusPerkawinan,
    example: 'Belum_Kawin',
    description: 'optional',
  })
  @IsNotEmpty()
  @IsEnum(StatusPerkawinan)
  readonly status_perkawinan?: keyof typeof StatusPerkawinan

  @IsOptional()
  @ApiPropertyOptional({
    example: 'Mahasiswa',
    description: 'optional',
  })
  @IsNotEmpty()
  @IsString()
  readonly pekerjaan?: string

  @IsOptional()
  @ApiPropertyOptional({
    example: 'WNI',
    description: 'optional',
  })
  @IsNotEmpty()
  @IsString()
  readonly kewarganegaraan?: string

  @IsOptional()
  @ApiPropertyOptional({
    example: '2023-08-17',
    description: 'optional',
  })
  @IsNotEmpty()
  @IsISO8601({ strict: true })
  tanggal_terbit?: string
}

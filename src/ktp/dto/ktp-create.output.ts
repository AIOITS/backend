import { InputType } from '@nestjs/graphql'
import { Agama } from 'src/@generated/prisma-nestjs-graphql/prisma/agama.enum'
import { StatusPerkawinan } from 'src/@generated/prisma-nestjs-graphql/prisma/status-perkawinan.enum'
import {
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { GolonganDarah } from '@prisma/client'

@InputType()
export class KTPCreateOutput {
  @ApiProperty({
    example: '1234567890123456',
  })
  @IsNotEmpty()
  @IsNumberString()
  @Length(16, 16, {
    message: 'nik must be equal to 16 characters',
  })
  readonly nik: string

  @ApiProperty({
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  readonly nama: string

  @ApiProperty({
    example: 'Jakarta',
  })
  @IsNotEmpty()
  @IsString()
  readonly tempat_lahir: string

  @ApiProperty({
    example: '1990-01-01',
  })
  @IsNotEmpty()
  @IsISO8601({ strict: true })
  readonly tanggal_lahir: string

  @ApiProperty({
    example: 'Jl. Main Street',
  })
  @IsNotEmpty()
  @IsString()
  readonly alamat: string

  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly rt: number

  @ApiProperty({
    example: 2,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly rw: number

  @ApiProperty({
    example: 'Keputih',
  })
  @IsNotEmpty()
  @IsString()
  readonly kelurahan_desa: string

  @ApiProperty({
    example: 'Sukolilo',
  })
  @IsNotEmpty()
  @IsString()
  readonly kecamatan: string

  @ApiProperty({
    example: 'Surabaya',
  })
  @IsNotEmpty()
  @IsString()
  readonly kabupaten_kota: string

  @ApiProperty({
    example: 'Jawa Timur',
  })
  @IsNotEmpty()
  @IsString()
  readonly provinsi: string

  @ApiProperty({
    enum: GolonganDarah,
    example: 'A',
  })
  @IsNotEmpty()
  @IsEnum(GolonganDarah)
  readonly golongan_darah: keyof typeof GolonganDarah

  @ApiProperty({
    enum: Agama,
    example: 'Islam',
  })
  @IsNotEmpty()
  @IsEnum(Agama)
  readonly agama: keyof typeof Agama

  @ApiProperty({
    enum: StatusPerkawinan,
    example: 'Belum_Kawin',
  })
  @IsNotEmpty()
  @IsEnum(StatusPerkawinan)
  readonly status_perkawinan: keyof typeof StatusPerkawinan

  @ApiProperty({
    example: 'Mahasiswa',
  })
  @IsNotEmpty()
  @IsString()
  readonly pekerjaan: string

  @ApiProperty({
    example: 'WNI',
  })
  @IsNotEmpty()
  @IsString()
  readonly kewarganegaraan: string

  @ApiProperty({
    example: '2023-08-17',
  })
  @IsNotEmpty()
  @IsISO8601({ strict: true })
  tanggal_terbit: string
}

import { ApiProperty } from '@nestjs/swagger'
import { JenisSim } from '@prisma/client';
import {
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator'

export class SimCreateInput {
  @ApiProperty({ example: 'E22A8F1B' })
  @IsNotEmpty()
  @IsString()
  readonly uid: string;

  @ApiProperty({ example: '12345' })
  @IsNotEmpty()
  @IsString()
  readonly nomor_sim: string;

  @ApiProperty({
    enum: JenisSim,
    example: 'a',
  })
  @IsEnum(JenisSim)
  readonly jenis_sim: keyof typeof JenisSim;

  @ApiProperty({ example: 'PKM AIOITS' })
  @IsNotEmpty()
  @IsString()
  readonly nama: string;

  @ApiProperty({ example: 'Jl. Teknik Kimia, Sukolilo ITS' })
  @IsNotEmpty()
  @IsString()
  readonly alamat: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  readonly rt: number;

  @ApiProperty({ example: 2 })
  @IsNotEmpty()
  @IsNumber()
  readonly rw: number;

  @ApiProperty({ example: 'Keputih' })
  @IsNotEmpty()
  @IsString()
  readonly kelurahan_desa: string;

  @ApiProperty({ example: 'Sukolilo' })
  @IsNotEmpty()
  @IsString()
  readonly kecamatan: string;

  @ApiProperty({ example: 'Surabaya' })
  @IsNotEmpty()
  @IsString()
  readonly kabupaten: string;

  @ApiProperty({ example: 'Mahasiswa' })
  @IsNotEmpty()
  @IsString()
  readonly pekerjaan: string;

  @ApiProperty({ example: 'Jakarta' })
  @IsNotEmpty()
  @IsString()
  readonly kabupaten_terbit: string;

  @ApiProperty({ example: '2023-09-04' })
  @IsNotEmpty()
  @IsISO8601()
  readonly tanggal_terbit: Date;

  @ApiProperty({ example: 'Metro Jaya' })
  @IsNotEmpty()
  @IsString()
  readonly penerbit: string;

  @ApiProperty({ example: '2023-09-04' })
  @IsNotEmpty()
  @IsISO8601()
  readonly berlaku_sampai: Date;

  readonly userId: number
}

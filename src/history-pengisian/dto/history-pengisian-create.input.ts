import { ApiProperty } from '@nestjs/swagger'
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator'
import { KategoriPengisian } from 'src/@generated/prisma-nestjs-graphql/prisma/kategori-pengisian.enum'

export class HistoryPengisianCreateInput {
  @ApiProperty({ example: 'subsidi' })
  @IsEnum(KategoriPengisian)
  readonly kategori_pengisian: KategoriPengisian

  @ApiProperty({ example: 'sepeda motor' })
  @IsNotEmpty()
  @IsString()
  readonly jenis_kendaraan: string

  @ApiProperty({ example: 20 })
  @IsNotEmpty()
  @IsNumber()
  readonly jumlah: number

  @ApiProperty({ example: '98762848' })
  @IsNotEmpty()
  @IsNumberString()
  readonly nomor_stnk: string

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  readonly bbm_id: number

  @ApiProperty({ example: '00:1A:2B:3C:4D:5E' })
  @IsNotEmpty()
  readonly device_id: string

  readonly user_id: number
}

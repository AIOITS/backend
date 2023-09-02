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

  @ApiProperty({ example: 'SPBU Surabaya Soetomo' })
  @IsNotEmpty()
  @IsString()
  readonly nama_spbu: string

  @ApiProperty({ example: 20 })
  @IsNotEmpty()
  @IsNumber()
  readonly jumlah: number

  @ApiProperty({ example: '98762848' })
  @IsNotEmpty()
  @IsNumberString()
  readonly nomor_stnk: string

  readonly user_id: number
}

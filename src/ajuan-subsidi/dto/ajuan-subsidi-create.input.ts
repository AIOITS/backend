import { ApiProperty } from '@nestjs/swagger'
import { IsISO8601, IsNotEmpty, IsNumberString, IsString } from 'class-validator'

export class AjuanSubsidiCreateInput {
  @ApiProperty({ example: '50' })
  @IsNotEmpty()
  @IsNumberString()
  readonly jumlah: number|string

  @ApiProperty({ example: 'dibutuhkan dalam mendukung pekerjaan' })
  @IsNotEmpty()
  readonly alasan: string

  @ApiProperty({ example: '98762848' })
  @IsString()
  readonly nomor_stnk: string

  @ApiProperty()
  readonly dokumen_pendukung: Express.Multer.File[]

  @ApiProperty({ example: '2023-09-01' })
  @IsNotEmpty()
  @IsISO8601({ strict: true })
  readonly tanggal_pengajuan: string
  readonly userId: number
}

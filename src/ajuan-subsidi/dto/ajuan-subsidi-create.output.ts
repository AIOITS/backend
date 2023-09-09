import { ApiProperty } from '@nestjs/swagger'
import { IsISO8601, IsNotEmpty, IsNumberString } from 'class-validator'

type outputFile = {
  name: String
  url: String
}

export class AjuanSubsidiCreateOutput {
  @ApiProperty({ example: '50' })
  @IsNotEmpty()
  @IsNumberString()
  readonly jumlah: number

  @ApiProperty({ example: 'dibutuhkan dalam mendukung pekerjaan' })
  @IsNotEmpty()
  readonly alasan: string

  @ApiProperty({ example: [
    {
      name: 'Dokumen Bukti.jpg',
      url: 'https://storage.googleapis.com/aioits_storage/dokumen_pendukung/xxx.jpeg'
    }
  ] })
  readonly dokumen_pendukung: Array<outputFile>

  @ApiProperty({ example: '2023-09-01' })
  @IsNotEmpty()
  @IsISO8601({ strict: true })
  readonly tanggal_pengajuan: string
}

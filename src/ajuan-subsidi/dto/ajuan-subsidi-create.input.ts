import {
  IsISO8601,
  IsNotEmpty,
  IsNumberString,
} from 'class-validator'

export class AjuanSubsidiCreateInput {
  @IsNotEmpty()
  @IsNumberString()
  readonly jumlah: number

  @IsNotEmpty()
  readonly alasan: string

  readonly dokumen_pendukung: Express.Multer.File[]

  @IsNotEmpty()
  @IsISO8601({ strict: true })
  readonly tanggal_pengajuan: Date | string
  readonly userId: number
}

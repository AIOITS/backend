import { ApiProperty } from '@nestjs/swagger'
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator'

export class PkbCreateInput {
  @ApiProperty({ example: 'E22A8F1B' })
  @IsNotEmpty()
  @IsString()
  readonly nomor_pkb: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  readonly status_pajak: boolean;

  @ApiProperty({ example: 123456 })
  @IsNumber()
  readonly bbknb_pokok: number;

  @ApiProperty({ example: 123456 })
  @IsNumber()
  readonly bbknb_sanksi: number;

  @ApiProperty({ example: 123456 })
  @IsNumber()
  readonly PKB_pokok: number;

  @ApiProperty({ example: 123456 })
  @IsNumber()
  readonly PKB_sanksi: number;

  @ApiProperty({ example: 123456 })
  @IsNumber()
  readonly swdkllj_pokok: number;

  @ApiProperty({ example: 123456 })
  @IsNumber()
  readonly swdkllj_sanksi: number;

  @ApiProperty({ example: 123456 })
  @IsNumber()
  readonly administrasi_stnk_pokok: number;

  @ApiProperty({ example: 123456 })
  @IsNumber()
  readonly administrasi_stnk_sanksi: number;

  @ApiProperty({ example: 123456 })
  @IsNumber()
  readonly administrasi_tnkb_pokok: number;

  @ApiProperty({ example: 123456 })
  @IsNumber()
  readonly administrasi_tnkb_sanksi: number;

  readonly userId: number
}

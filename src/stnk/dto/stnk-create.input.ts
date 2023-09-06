import { IsString, IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class StnkCreateInput {
  @ApiProperty({ example: 'STNK123' })
  @IsNotEmpty()
  @IsString()
  readonly nomor_stnk: string;

  @ApiProperty({ example: 'ABC123' })
  @IsNotEmpty()
  @IsString()
  readonly nomor_polisi: string;

  @ApiProperty({ example: 'John Doe' })
  @IsNotEmpty()
  @IsString()
  readonly nama_pemilik: string;

  @ApiProperty({ example: 'BPKB456' })
  @IsString()
  readonly nomor_bpkb: string;

  @ApiProperty({ example: '123 Main St' })
  @IsString()
  readonly alamat: string;

  @ApiProperty({ example: 'Gasoline' })
  @IsString()
  readonly bahan_bakar: string;

  @ApiProperty({ example: '2023-09-06' })
  @IsNotEmpty()
  @IsDateString()
  readonly berlaku: string;

  @ApiProperty({ example: 'Toyota' })
  @IsString()
  readonly merk: string;

  @ApiProperty({ example: 'Sedan' })
  @IsString()
  readonly tipe: string;

  @ApiProperty({ example: 'Sedan' })
  @IsString()
  readonly jenis: string;

  @ApiProperty({ example: 'Corolla' })
  @IsString()
  readonly model: string;

  @ApiProperty({ example: '2020' })
  @IsString()
  readonly tahun_pembuatan: string;

  @ApiProperty({ example: '4' })
  @IsString()
  readonly isi_silinder: string;

  @ApiProperty({ example: '12345' })
  @IsString()
  readonly nomor_mesin: string;

  @ApiProperty({ example: '67890' })
  @IsString()
  readonly nomor_rangka: string;

  @ApiProperty({ example: 'Blue' })
  @IsString()
  readonly warna: string;

  @ApiProperty({ example: 'Blue' })
  @IsString()
  readonly warna_tnkb: string;

  @ApiProperty({ example: '2023' })
  @IsString()
  readonly tahun_registrasi: string;

  @ApiProperty({ example: 'REG123' })
  @IsString()
  readonly nomor_registrasi: string;

  @ApiProperty({ example: 'LOC456' })
  @IsString()
  readonly kode_lokasi: string;

  @ApiProperty({ example: '789' })
  @IsString()
  readonly nomor_urut_pendaftaran: string;

  @ApiProperty({ example: 'E22A8F1B' })
  @IsString()
  readonly nomor_pkb: string;

  readonly userId: number;
}

export default StnkCreateInput;

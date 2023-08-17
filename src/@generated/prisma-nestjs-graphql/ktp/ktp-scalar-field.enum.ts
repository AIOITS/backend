import { registerEnumType } from '@nestjs/graphql'

export enum KTPScalarFieldEnum {
  nik = 'nik',
  nama = 'nama',
  tempat_lahir = 'tempat_lahir',
  tanggal_lahir = 'tanggal_lahir',
  alamat = 'alamat',
  rt = 'rt',
  rw = 'rw',
  kelurahan_desa = 'kelurahan_desa',
  kecamatan = 'kecamatan',
  kabupaten_kota = 'kabupaten_kota',
  provinsi = 'provinsi',
  golongan_darah = 'golongan_darah',
  agama = 'agama',
  status_perkawinan = 'status_perkawinan',
  pekerjaan = 'pekerjaan',
  kewarganegaraan = 'kewarganegaraan',
  tanggal_terbit = 'tanggal_terbit',
}

registerEnumType(KTPScalarFieldEnum, {
  name: 'KTPScalarFieldEnum',
  description: undefined,
})

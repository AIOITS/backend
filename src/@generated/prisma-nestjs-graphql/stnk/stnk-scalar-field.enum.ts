import { registerEnumType } from '@nestjs/graphql'

export enum StnkScalarFieldEnum {
  nomor_stnk = 'nomor_stnk',
  nomor_polisi = 'nomor_polisi',
  nama_pemilik = 'nama_pemilik',
  nomor_bpkb = 'nomor_bpkb',
  alamat = 'alamat',
  bahan_bakar = 'bahan_bakar',
  berlaku = 'berlaku',
  merk = 'merk',
  tipe = 'tipe',
  jenis = 'jenis',
  model = 'model',
  tahun_pembuatan = 'tahun_pembuatan',
  isi_silinder = 'isi_silinder',
  nomor_mesin = 'nomor_mesin',
  nomor_rangka = 'nomor_rangka',
  warna = 'warna',
  warna_tnkb = 'warna_tnkb',
  tahun_registrasi = 'tahun_registrasi',
  nomor_registrasi = 'nomor_registrasi',
  kode_lokasi = 'kode_lokasi',
  nomor_urut_pendaftaran = 'nomor_urut_pendaftaran',
  nomor_pkb = 'nomor_pkb',
  nik = 'nik',
}

registerEnumType(StnkScalarFieldEnum, {
  name: 'StnkScalarFieldEnum',
  description: undefined,
})

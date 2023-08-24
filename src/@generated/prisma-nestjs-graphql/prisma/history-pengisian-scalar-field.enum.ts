import { registerEnumType } from '@nestjs/graphql'

export enum History_pengisianScalarFieldEnum {
  kategori_pengisian = 'kategori_pengisian',
  nama_spbu = 'nama_spbu',
  jumlah = 'jumlah',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  nomor_stnk = 'nomor_stnk',
}

registerEnumType(History_pengisianScalarFieldEnum, {
  name: 'History_pengisianScalarFieldEnum',
  description: undefined,
})

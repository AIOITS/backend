import { registerEnumType } from '@nestjs/graphql'

export enum HistoryPengisianScalarFieldEnum {
  id = 'id',
  kategori_pengisian = 'kategori_pengisian',
  nama_spbu = 'nama_spbu',
  jumlah = 'jumlah',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  user_id = 'user_id',
  nomor_stnk = 'nomor_stnk',
}

registerEnumType(HistoryPengisianScalarFieldEnum, {
  name: 'HistoryPengisianScalarFieldEnum',
  description: undefined,
})

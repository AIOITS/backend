import { registerEnumType } from '@nestjs/graphql'

export enum Ajuan_subsidiScalarFieldEnum {
  id = 'id',
  jumlah = 'jumlah',
  alasan = 'alasan',
  dokumen_pendukung = 'dokumen_pendukung',
  tanggal_pengajuan = 'tanggal_pengajuan',
  status_pengajuan = 'status_pengajuan',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(Ajuan_subsidiScalarFieldEnum, {
  name: 'Ajuan_subsidiScalarFieldEnum',
  description: undefined,
})

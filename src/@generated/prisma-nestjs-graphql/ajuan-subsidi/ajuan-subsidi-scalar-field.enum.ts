import { registerEnumType } from '@nestjs/graphql'

export enum AjuanSubsidiScalarFieldEnum {
  id = 'id',
  jumlah = 'jumlah',
  alasan = 'alasan',
  tanggal_pengajuan = 'tanggal_pengajuan',
  status_pengajuan = 'status_pengajuan',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  userId = 'userId',
}

registerEnumType(AjuanSubsidiScalarFieldEnum, {
  name: 'AjuanSubsidiScalarFieldEnum',
  description: undefined,
})

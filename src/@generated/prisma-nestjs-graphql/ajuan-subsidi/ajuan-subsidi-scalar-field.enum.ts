import { registerEnumType } from '@nestjs/graphql';

export enum AjuanSubsidiScalarFieldEnum {
    id = "id",
    nomor_stnk = "nomor_stnk",
    jumlah = "jumlah",
    alasan = "alasan",
    tanggal_pengajuan = "tanggal_pengajuan",
    status_pengajuan = "status_pengajuan",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    user_id = "user_id"
}


registerEnumType(AjuanSubsidiScalarFieldEnum, { name: 'AjuanSubsidiScalarFieldEnum', description: undefined })

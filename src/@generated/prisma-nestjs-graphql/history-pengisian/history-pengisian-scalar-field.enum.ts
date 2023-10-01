import { registerEnumType } from '@nestjs/graphql';

export enum HistoryPengisianScalarFieldEnum {
    id = "id",
    kategori_pengisian = "kategori_pengisian",
    device_id = "device_id",
    jenis_kendaraan = "jenis_kendaraan",
    spbu_id = "spbu_id",
    jumlah = "jumlah",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    bbm_id = "bbm_id",
    user_id = "user_id",
    nomor_stnk = "nomor_stnk"
}


registerEnumType(HistoryPengisianScalarFieldEnum, { name: 'HistoryPengisianScalarFieldEnum', description: undefined })

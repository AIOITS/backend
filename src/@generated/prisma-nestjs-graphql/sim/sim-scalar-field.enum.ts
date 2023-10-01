import { registerEnumType } from '@nestjs/graphql';

export enum SimScalarFieldEnum {
    uid = "uid",
    nomor_sim = "nomor_sim",
    jenis_sim = "jenis_sim",
    nama = "nama",
    alamat = "alamat",
    rt = "rt",
    rw = "rw",
    kelurahan_desa = "kelurahan_desa",
    kecamatan = "kecamatan",
    kabupaten = "kabupaten",
    pekerjaan = "pekerjaan",
    kabupaten_terbit = "kabupaten_terbit",
    tanggal_terbit = "tanggal_terbit",
    penerbit = "penerbit",
    berlaku_sampai = "berlaku_sampai",
    nik = "nik"
}


registerEnumType(SimScalarFieldEnum, { name: 'SimScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum JenisKelamin {
    laki_laki = "laki_laki",
    perempuan = "perempuan",
    lainnya = "lainnya"
}


registerEnumType(JenisKelamin, { name: 'JenisKelamin', description: undefined })

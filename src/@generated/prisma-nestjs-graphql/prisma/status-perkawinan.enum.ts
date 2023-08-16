import { registerEnumType } from '@nestjs/graphql';

export enum StatusPerkawinan {
    Belum_Kawin = "Belum_Kawin",
    Kawin = "Kawin",
    Cerai_Hidup = "Cerai_Hidup",
    Cerai_Mati = "Cerai_Mati"
}


registerEnumType(StatusPerkawinan, { name: 'StatusPerkawinan', description: undefined })

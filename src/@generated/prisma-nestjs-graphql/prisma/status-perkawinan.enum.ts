import { registerEnumType } from '@nestjs/graphql';

export enum StatusPerkawinan {
    belum_kawin = "belum_kawin",
    kawin = "kawin",
    cerai_hidup = "cerai_hidup",
    cerai_mati = "cerai_mati"
}


registerEnumType(StatusPerkawinan, { name: 'StatusPerkawinan', description: undefined })

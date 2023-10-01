import { registerEnumType } from '@nestjs/graphql';

export enum KategoriPengisian {
    subsidi = "subsidi",
    non_subsidi = "non_subsidi"
}


registerEnumType(KategoriPengisian, { name: 'KategoriPengisian', description: undefined })

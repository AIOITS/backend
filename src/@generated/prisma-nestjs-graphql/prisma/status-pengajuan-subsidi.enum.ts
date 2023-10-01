import { registerEnumType } from '@nestjs/graphql';

export enum StatusPengajuanSubsidi {
    diproses = "diproses",
    ditolak = "ditolak",
    disetujui = "disetujui"
}


registerEnumType(StatusPengajuanSubsidi, { name: 'StatusPengajuanSubsidi', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum Agama {
    islam = "islam",
    kristen = "kristen",
    katolik = "katolik",
    budha = "budha",
    hindu = "hindu",
    konghuchu = "konghuchu",
    aliran_kepercayaan = "aliran_kepercayaan"
}


registerEnumType(Agama, { name: 'Agama', description: undefined })

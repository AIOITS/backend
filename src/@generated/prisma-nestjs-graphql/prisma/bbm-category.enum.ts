import { registerEnumType } from '@nestjs/graphql';

export enum BbmCategory {
    bensin = "bensin",
    solar = "solar"
}


registerEnumType(BbmCategory, { name: 'BbmCategory', description: undefined })

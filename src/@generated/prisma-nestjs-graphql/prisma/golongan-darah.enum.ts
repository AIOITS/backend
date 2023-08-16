import { registerEnumType } from '@nestjs/graphql';

export enum GolonganDarah {
    A = "A",
    B = "B",
    AB = "AB",
    O = "O"
}


registerEnumType(GolonganDarah, { name: 'GolonganDarah', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum BbmScalarFieldEnum {
    id = "id",
    name = "name",
    type = "type",
    price_per_liter = "price_per_liter",
    is_subsidi = "is_subsidi",
    category = "category"
}


registerEnumType(BbmScalarFieldEnum, { name: 'BbmScalarFieldEnum', description: undefined })

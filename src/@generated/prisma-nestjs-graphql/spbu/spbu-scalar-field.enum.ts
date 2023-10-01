import { registerEnumType } from '@nestjs/graphql';

export enum SpbuScalarFieldEnum {
    id = "id",
    name = "name",
    alamat = "alamat"
}


registerEnumType(SpbuScalarFieldEnum, { name: 'SpbuScalarFieldEnum', description: undefined })

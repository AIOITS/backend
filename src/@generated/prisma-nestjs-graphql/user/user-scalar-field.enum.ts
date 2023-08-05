import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    nik = "nik",
    name = "name",
    email = "email",
    phone = "phone",
    password = "password",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

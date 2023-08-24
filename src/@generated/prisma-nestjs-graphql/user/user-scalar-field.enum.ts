import { registerEnumType } from '@nestjs/graphql'

export enum UserScalarFieldEnum {
  id = 'id',
  nik = 'nik',
  name = 'name',
  email = 'email',
  phone = 'phone',
  password = 'password',
  kuota_subsidi = 'kuota_subsidi',
  saldo = 'saldo',
  role = 'role',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
})

import { registerEnumType } from '@nestjs/graphql'

export enum FileScalarFieldEnum {
  id = 'id',
  name = 'name',
  url = 'url',
  ajuanSubsidiId = 'ajuanSubsidiId',
}

registerEnumType(FileScalarFieldEnum, {
  name: 'FileScalarFieldEnum',
  description: undefined,
})

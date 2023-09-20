import { registerEnumType } from '@nestjs/graphql'

export enum BbmScalarFieldEnum {
  id = 'id',
  name = 'name',
  type = 'type',
  price_per_liter = 'price_per_liter',
}

registerEnumType(BbmScalarFieldEnum, {
  name: 'BbmScalarFieldEnum',
  description: undefined,
})

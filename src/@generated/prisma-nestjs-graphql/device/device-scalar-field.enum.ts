import { registerEnumType } from '@nestjs/graphql'

export enum DeviceScalarFieldEnum {
  device_id = 'device_id',
  spbu_id = 'spbu_id',
}

registerEnumType(DeviceScalarFieldEnum, {
  name: 'DeviceScalarFieldEnum',
  description: undefined,
})

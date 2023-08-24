import { registerEnumType } from '@nestjs/graphql'

export enum GolonganDarah {
  a = 'a',
  b = 'b',
  ab = 'ab',
  o = 'o',
}

registerEnumType(GolonganDarah, {
  name: 'GolonganDarah',
  description: undefined,
})

import { registerEnumType } from '@nestjs/graphql'

export enum JenisSim {
  a = 'a',
  a_umum = 'a_umum',
  b1 = 'b1',
  b2 = 'b2',
  b2_umum = 'b2_umum',
  c = 'c',
  d = 'd',
  e = 'e',
  f = 'f',
  g = 'g',
  i = 'i',
  x = 'x',
}

registerEnumType(JenisSim, { name: 'JenisSim', description: undefined })

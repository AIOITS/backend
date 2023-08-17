import { registerEnumType } from '@nestjs/graphql'

export enum Agama {
  Islam = 'Islam',
  Kristen = 'Kristen',
  Katolik = 'Katolik',
  Budha = 'Budha',
  Hindu = 'Hindu',
  Konghuchu = 'Konghuchu',
  Aliran_Kepercayaan = 'Aliran_Kepercayaan',
}

registerEnumType(Agama, { name: 'Agama', description: undefined })

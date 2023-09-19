import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SpbuUpdateWithoutDeviceInput } from './spbu-update-without-device.input'
import { Type } from 'class-transformer'
import { SpbuCreateWithoutDeviceInput } from './spbu-create-without-device.input'
import { SpbuWhereInput } from './spbu-where.input'

@InputType()
export class SpbuUpsertWithoutDeviceInput {
  @Field(() => SpbuUpdateWithoutDeviceInput, { nullable: false })
  @Type(() => SpbuUpdateWithoutDeviceInput)
  update!: SpbuUpdateWithoutDeviceInput

  @Field(() => SpbuCreateWithoutDeviceInput, { nullable: false })
  @Type(() => SpbuCreateWithoutDeviceInput)
  create!: SpbuCreateWithoutDeviceInput

  @Field(() => SpbuWhereInput, { nullable: true })
  @Type(() => SpbuWhereInput)
  where?: SpbuWhereInput
}

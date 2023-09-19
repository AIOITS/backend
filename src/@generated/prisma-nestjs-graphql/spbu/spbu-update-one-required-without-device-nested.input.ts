import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SpbuCreateWithoutDeviceInput } from './spbu-create-without-device.input'
import { Type } from 'class-transformer'
import { SpbuCreateOrConnectWithoutDeviceInput } from './spbu-create-or-connect-without-device.input'
import { SpbuUpsertWithoutDeviceInput } from './spbu-upsert-without-device.input'
import { Prisma } from '@prisma/client'
import { SpbuWhereUniqueInput } from './spbu-where-unique.input'
import { SpbuUpdateToOneWithWhereWithoutDeviceInput } from './spbu-update-to-one-with-where-without-device.input'

@InputType()
export class SpbuUpdateOneRequiredWithoutDeviceNestedInput {
  @Field(() => SpbuCreateWithoutDeviceInput, { nullable: true })
  @Type(() => SpbuCreateWithoutDeviceInput)
  create?: SpbuCreateWithoutDeviceInput

  @Field(() => SpbuCreateOrConnectWithoutDeviceInput, { nullable: true })
  @Type(() => SpbuCreateOrConnectWithoutDeviceInput)
  connectOrCreate?: SpbuCreateOrConnectWithoutDeviceInput

  @Field(() => SpbuUpsertWithoutDeviceInput, { nullable: true })
  @Type(() => SpbuUpsertWithoutDeviceInput)
  upsert?: SpbuUpsertWithoutDeviceInput

  @Field(() => SpbuWhereUniqueInput, { nullable: true })
  @Type(() => SpbuWhereUniqueInput)
  connect?: Prisma.AtLeast<SpbuWhereUniqueInput, 'id'>

  @Field(() => SpbuUpdateToOneWithWhereWithoutDeviceInput, { nullable: true })
  @Type(() => SpbuUpdateToOneWithWhereWithoutDeviceInput)
  update?: SpbuUpdateToOneWithWhereWithoutDeviceInput
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SpbuCreateWithoutHistoryPengisianInput } from './spbu-create-without-history-pengisian.input'
import { Type } from 'class-transformer'
import { SpbuCreateOrConnectWithoutHistoryPengisianInput } from './spbu-create-or-connect-without-history-pengisian.input'
import { SpbuUpsertWithoutHistoryPengisianInput } from './spbu-upsert-without-history-pengisian.input'
import { Prisma } from '@prisma/client'
import { SpbuWhereUniqueInput } from './spbu-where-unique.input'
import { SpbuUpdateToOneWithWhereWithoutHistoryPengisianInput } from './spbu-update-to-one-with-where-without-history-pengisian.input'

@InputType()
export class SpbuUpdateOneRequiredWithoutHistoryPengisianNestedInput {
  @Field(() => SpbuCreateWithoutHistoryPengisianInput, { nullable: true })
  @Type(() => SpbuCreateWithoutHistoryPengisianInput)
  create?: SpbuCreateWithoutHistoryPengisianInput

  @Field(() => SpbuCreateOrConnectWithoutHistoryPengisianInput, {
    nullable: true,
  })
  @Type(() => SpbuCreateOrConnectWithoutHistoryPengisianInput)
  connectOrCreate?: SpbuCreateOrConnectWithoutHistoryPengisianInput

  @Field(() => SpbuUpsertWithoutHistoryPengisianInput, { nullable: true })
  @Type(() => SpbuUpsertWithoutHistoryPengisianInput)
  upsert?: SpbuUpsertWithoutHistoryPengisianInput

  @Field(() => SpbuWhereUniqueInput, { nullable: true })
  @Type(() => SpbuWhereUniqueInput)
  connect?: Prisma.AtLeast<SpbuWhereUniqueInput, 'id'>

  @Field(() => SpbuUpdateToOneWithWhereWithoutHistoryPengisianInput, {
    nullable: true,
  })
  @Type(() => SpbuUpdateToOneWithWhereWithoutHistoryPengisianInput)
  update?: SpbuUpdateToOneWithWhereWithoutHistoryPengisianInput
}

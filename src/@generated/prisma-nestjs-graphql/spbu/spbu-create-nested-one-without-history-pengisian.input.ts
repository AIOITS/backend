import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SpbuCreateWithoutHistoryPengisianInput } from './spbu-create-without-history-pengisian.input'
import { Type } from 'class-transformer'
import { SpbuCreateOrConnectWithoutHistoryPengisianInput } from './spbu-create-or-connect-without-history-pengisian.input'
import { Prisma } from '@prisma/client'
import { SpbuWhereUniqueInput } from './spbu-where-unique.input'

@InputType()
export class SpbuCreateNestedOneWithoutHistoryPengisianInput {
  @Field(() => SpbuCreateWithoutHistoryPengisianInput, { nullable: true })
  @Type(() => SpbuCreateWithoutHistoryPengisianInput)
  create?: SpbuCreateWithoutHistoryPengisianInput

  @Field(() => SpbuCreateOrConnectWithoutHistoryPengisianInput, {
    nullable: true,
  })
  @Type(() => SpbuCreateOrConnectWithoutHistoryPengisianInput)
  connectOrCreate?: SpbuCreateOrConnectWithoutHistoryPengisianInput

  @Field(() => SpbuWhereUniqueInput, { nullable: true })
  @Type(() => SpbuWhereUniqueInput)
  connect?: Prisma.AtLeast<SpbuWhereUniqueInput, 'id'>
}

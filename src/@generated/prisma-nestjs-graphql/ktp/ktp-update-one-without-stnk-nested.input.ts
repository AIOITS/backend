import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KtpCreateWithoutStnkInput } from './ktp-create-without-stnk.input'
import { Type } from 'class-transformer'
import { KtpCreateOrConnectWithoutStnkInput } from './ktp-create-or-connect-without-stnk.input'
import { KtpUpsertWithoutStnkInput } from './ktp-upsert-without-stnk.input'
import { KtpWhereInput } from './ktp-where.input'
import { Prisma } from '@prisma/client'
import { KtpWhereUniqueInput } from './ktp-where-unique.input'
import { KtpUpdateToOneWithWhereWithoutStnkInput } from './ktp-update-to-one-with-where-without-stnk.input'

@InputType()
export class KtpUpdateOneWithoutStnkNestedInput {
  @Field(() => KtpCreateWithoutStnkInput, { nullable: true })
  @Type(() => KtpCreateWithoutStnkInput)
  create?: KtpCreateWithoutStnkInput

  @Field(() => KtpCreateOrConnectWithoutStnkInput, { nullable: true })
  @Type(() => KtpCreateOrConnectWithoutStnkInput)
  connectOrCreate?: KtpCreateOrConnectWithoutStnkInput

  @Field(() => KtpUpsertWithoutStnkInput, { nullable: true })
  @Type(() => KtpUpsertWithoutStnkInput)
  upsert?: KtpUpsertWithoutStnkInput

  @Field(() => KtpWhereInput, { nullable: true })
  @Type(() => KtpWhereInput)
  disconnect?: KtpWhereInput

  @Field(() => KtpWhereInput, { nullable: true })
  @Type(() => KtpWhereInput)
  delete?: KtpWhereInput

  @Field(() => KtpWhereUniqueInput, { nullable: true })
  @Type(() => KtpWhereUniqueInput)
  connect?: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>

  @Field(() => KtpUpdateToOneWithWhereWithoutStnkInput, { nullable: true })
  @Type(() => KtpUpdateToOneWithWhereWithoutStnkInput)
  update?: KtpUpdateToOneWithWhereWithoutStnkInput
}

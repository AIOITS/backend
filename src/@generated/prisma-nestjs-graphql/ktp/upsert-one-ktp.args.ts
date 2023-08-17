import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { KtpWhereUniqueInput } from './ktp-where-unique.input'
import { Type } from 'class-transformer'
import { KtpCreateInput } from './ktp-create.input'
import { KtpUpdateInput } from './ktp-update.input'

@ArgsType()
export class UpsertOneKtpArgs {
  @Field(() => KtpWhereUniqueInput, { nullable: false })
  @Type(() => KtpWhereUniqueInput)
  where!: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>

  @Field(() => KtpCreateInput, { nullable: false })
  @Type(() => KtpCreateInput)
  create!: KtpCreateInput

  @Field(() => KtpUpdateInput, { nullable: false })
  @Type(() => KtpUpdateInput)
  update!: KtpUpdateInput
}

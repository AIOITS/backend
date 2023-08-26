import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { KtpWhereUniqueInput } from './ktp-where-unique.input'
import { Type } from 'class-transformer'
import { KtpCreateWithoutStnkInput } from './ktp-create-without-stnk.input'

@InputType()
export class KtpCreateOrConnectWithoutStnkInput {
  @Field(() => KtpWhereUniqueInput, { nullable: false })
  @Type(() => KtpWhereUniqueInput)
  where!: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>

  @Field(() => KtpCreateWithoutStnkInput, { nullable: false })
  @Type(() => KtpCreateWithoutStnkInput)
  create!: KtpCreateWithoutStnkInput
}

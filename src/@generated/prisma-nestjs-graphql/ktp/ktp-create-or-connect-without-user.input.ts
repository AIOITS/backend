import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { KtpWhereUniqueInput } from './ktp-where-unique.input'
import { Type } from 'class-transformer'
import { KtpCreateWithoutUserInput } from './ktp-create-without-user.input'

@InputType()
export class KtpCreateOrConnectWithoutUserInput {
  @Field(() => KtpWhereUniqueInput, { nullable: false })
  @Type(() => KtpWhereUniqueInput)
  where!: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>

  @Field(() => KtpCreateWithoutUserInput, { nullable: false })
  @Type(() => KtpCreateWithoutUserInput)
  create!: KtpCreateWithoutUserInput
}

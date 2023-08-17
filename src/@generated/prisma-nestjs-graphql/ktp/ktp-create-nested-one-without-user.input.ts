import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KtpCreateWithoutUserInput } from './ktp-create-without-user.input'
import { Type } from 'class-transformer'
import { KtpCreateOrConnectWithoutUserInput } from './ktp-create-or-connect-without-user.input'
import { Prisma } from '@prisma/client'
import { KtpWhereUniqueInput } from './ktp-where-unique.input'

@InputType()
export class KtpCreateNestedOneWithoutUserInput {
  @Field(() => KtpCreateWithoutUserInput, { nullable: true })
  @Type(() => KtpCreateWithoutUserInput)
  create?: KtpCreateWithoutUserInput

  @Field(() => KtpCreateOrConnectWithoutUserInput, { nullable: true })
  @Type(() => KtpCreateOrConnectWithoutUserInput)
  connectOrCreate?: KtpCreateOrConnectWithoutUserInput

  @Field(() => KtpWhereUniqueInput, { nullable: true })
  @Type(() => KtpWhereUniqueInput)
  connect?: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>
}

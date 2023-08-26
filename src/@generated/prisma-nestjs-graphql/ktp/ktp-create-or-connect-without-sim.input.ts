import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { KtpWhereUniqueInput } from './ktp-where-unique.input'
import { Type } from 'class-transformer'
import { KtpCreateWithoutSimInput } from './ktp-create-without-sim.input'

@InputType()
export class KtpCreateOrConnectWithoutSimInput {
  @Field(() => KtpWhereUniqueInput, { nullable: false })
  @Type(() => KtpWhereUniqueInput)
  where!: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>

  @Field(() => KtpCreateWithoutSimInput, { nullable: false })
  @Type(() => KtpCreateWithoutSimInput)
  create!: KtpCreateWithoutSimInput
}

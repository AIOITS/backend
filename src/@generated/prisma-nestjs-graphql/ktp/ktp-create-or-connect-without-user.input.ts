import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { KTPWhereUniqueInput } from './ktp-where-unique.input'
import { Type } from 'class-transformer'
import { KTPCreateWithoutUserInput } from './ktp-create-without-user.input'

@InputType()
export class KTPCreateOrConnectWithoutUserInput {
  @Field(() => KTPWhereUniqueInput, { nullable: false })
  @Type(() => KTPWhereUniqueInput)
  where!: Prisma.AtLeast<KTPWhereUniqueInput, 'nik'>

  @Field(() => KTPCreateWithoutUserInput, { nullable: false })
  @Type(() => KTPCreateWithoutUserInput)
  create!: KTPCreateWithoutUserInput
}

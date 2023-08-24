import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { StnkWhereUniqueInput } from './stnk-where-unique.input'
import { Type } from 'class-transformer'
import { StnkUpdateWithoutKtpInput } from './stnk-update-without-ktp.input'
import { StnkCreateWithoutKtpInput } from './stnk-create-without-ktp.input'

@InputType()
export class StnkUpsertWithWhereUniqueWithoutKtpInput {
  @Field(() => StnkWhereUniqueInput, { nullable: false })
  @Type(() => StnkWhereUniqueInput)
  where!: Prisma.AtLeast<
    StnkWhereUniqueInput,
    'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'
  >

  @Field(() => StnkUpdateWithoutKtpInput, { nullable: false })
  @Type(() => StnkUpdateWithoutKtpInput)
  update!: StnkUpdateWithoutKtpInput

  @Field(() => StnkCreateWithoutKtpInput, { nullable: false })
  @Type(() => StnkCreateWithoutKtpInput)
  create!: StnkCreateWithoutKtpInput
}

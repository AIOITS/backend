import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { StnkWhereUniqueInput } from './stnk-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteOneStnkArgs {
  @Field(() => StnkWhereUniqueInput, { nullable: false })
  @Type(() => StnkWhereUniqueInput)
  where!: Prisma.AtLeast<
    StnkWhereUniqueInput,
    'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'
  >
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input'
import { Type } from 'class-transformer'
import { AjuanSubsidiCreateWithoutDokumen_pendukungInput } from './ajuan-subsidi-create-without-dokumen-pendukung.input'

@InputType()
export class AjuanSubsidiCreateOrConnectWithoutDokumen_pendukungInput {
  @Field(() => AjuanSubsidiWhereUniqueInput, { nullable: false })
  @Type(() => AjuanSubsidiWhereUniqueInput)
  where!: Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>

  @Field(() => AjuanSubsidiCreateWithoutDokumen_pendukungInput, {
    nullable: false,
  })
  @Type(() => AjuanSubsidiCreateWithoutDokumen_pendukungInput)
  create!: AjuanSubsidiCreateWithoutDokumen_pendukungInput
}

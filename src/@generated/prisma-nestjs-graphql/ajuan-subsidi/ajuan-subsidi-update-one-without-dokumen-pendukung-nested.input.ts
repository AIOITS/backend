import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AjuanSubsidiCreateWithoutDokumen_pendukungInput } from './ajuan-subsidi-create-without-dokumen-pendukung.input'
import { Type } from 'class-transformer'
import { AjuanSubsidiCreateOrConnectWithoutDokumen_pendukungInput } from './ajuan-subsidi-create-or-connect-without-dokumen-pendukung.input'
import { AjuanSubsidiUpsertWithoutDokumen_pendukungInput } from './ajuan-subsidi-upsert-without-dokumen-pendukung.input'
import { AjuanSubsidiWhereInput } from './ajuan-subsidi-where.input'
import { Prisma } from '@prisma/client'
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input'
import { AjuanSubsidiUpdateToOneWithWhereWithoutDokumen_pendukungInput } from './ajuan-subsidi-update-to-one-with-where-without-dokumen-pendukung.input'

@InputType()
export class AjuanSubsidiUpdateOneWithoutDokumen_pendukungNestedInput {
  @Field(() => AjuanSubsidiCreateWithoutDokumen_pendukungInput, {
    nullable: true,
  })
  @Type(() => AjuanSubsidiCreateWithoutDokumen_pendukungInput)
  create?: AjuanSubsidiCreateWithoutDokumen_pendukungInput

  @Field(() => AjuanSubsidiCreateOrConnectWithoutDokumen_pendukungInput, {
    nullable: true,
  })
  @Type(() => AjuanSubsidiCreateOrConnectWithoutDokumen_pendukungInput)
  connectOrCreate?: AjuanSubsidiCreateOrConnectWithoutDokumen_pendukungInput

  @Field(() => AjuanSubsidiUpsertWithoutDokumen_pendukungInput, {
    nullable: true,
  })
  @Type(() => AjuanSubsidiUpsertWithoutDokumen_pendukungInput)
  upsert?: AjuanSubsidiUpsertWithoutDokumen_pendukungInput

  @Field(() => AjuanSubsidiWhereInput, { nullable: true })
  @Type(() => AjuanSubsidiWhereInput)
  disconnect?: AjuanSubsidiWhereInput

  @Field(() => AjuanSubsidiWhereInput, { nullable: true })
  @Type(() => AjuanSubsidiWhereInput)
  delete?: AjuanSubsidiWhereInput

  @Field(() => AjuanSubsidiWhereUniqueInput, { nullable: true })
  @Type(() => AjuanSubsidiWhereUniqueInput)
  connect?: Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>

  @Field(() => AjuanSubsidiUpdateToOneWithWhereWithoutDokumen_pendukungInput, {
    nullable: true,
  })
  @Type(() => AjuanSubsidiUpdateToOneWithWhereWithoutDokumen_pendukungInput)
  update?: AjuanSubsidiUpdateToOneWithWhereWithoutDokumen_pendukungInput
}

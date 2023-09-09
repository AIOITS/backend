import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AjuanSubsidiUpdateWithoutDokumen_pendukungInput } from './ajuan-subsidi-update-without-dokumen-pendukung.input'
import { Type } from 'class-transformer'
import { AjuanSubsidiCreateWithoutDokumen_pendukungInput } from './ajuan-subsidi-create-without-dokumen-pendukung.input'
import { AjuanSubsidiWhereInput } from './ajuan-subsidi-where.input'

@InputType()
export class AjuanSubsidiUpsertWithoutDokumen_pendukungInput {
  @Field(() => AjuanSubsidiUpdateWithoutDokumen_pendukungInput, {
    nullable: false,
  })
  @Type(() => AjuanSubsidiUpdateWithoutDokumen_pendukungInput)
  update!: AjuanSubsidiUpdateWithoutDokumen_pendukungInput

  @Field(() => AjuanSubsidiCreateWithoutDokumen_pendukungInput, {
    nullable: false,
  })
  @Type(() => AjuanSubsidiCreateWithoutDokumen_pendukungInput)
  create!: AjuanSubsidiCreateWithoutDokumen_pendukungInput

  @Field(() => AjuanSubsidiWhereInput, { nullable: true })
  @Type(() => AjuanSubsidiWhereInput)
  where?: AjuanSubsidiWhereInput
}

import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AjuanSubsidiCreateNestedOneWithoutDokumen_pendukungInput } from '../ajuan-subsidi/ajuan-subsidi-create-nested-one-without-dokumen-pendukung.input'

@InputType()
export class FileCreateInput {
  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  url!: string

  @Field(() => AjuanSubsidiCreateNestedOneWithoutDokumen_pendukungInput, {
    nullable: true,
  })
  ajuanSubsidi?: AjuanSubsidiCreateNestedOneWithoutDokumen_pendukungInput
}

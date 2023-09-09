import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { FileWhereUniqueInput } from './file-where-unique.input'
import { Type } from 'class-transformer'
import { FileUpdateWithoutAjuanSubsidiInput } from './file-update-without-ajuan-subsidi.input'

@InputType()
export class FileUpdateWithWhereUniqueWithoutAjuanSubsidiInput {
  @Field(() => FileWhereUniqueInput, { nullable: false })
  @Type(() => FileWhereUniqueInput)
  where!: Prisma.AtLeast<FileWhereUniqueInput, 'id'>

  @Field(() => FileUpdateWithoutAjuanSubsidiInput, { nullable: false })
  @Type(() => FileUpdateWithoutAjuanSubsidiInput)
  data!: FileUpdateWithoutAjuanSubsidiInput
}

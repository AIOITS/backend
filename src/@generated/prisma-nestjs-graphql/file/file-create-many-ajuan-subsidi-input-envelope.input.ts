import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FileCreateManyAjuanSubsidiInput } from './file-create-many-ajuan-subsidi.input'
import { Type } from 'class-transformer'

@InputType()
export class FileCreateManyAjuanSubsidiInputEnvelope {
  @Field(() => [FileCreateManyAjuanSubsidiInput], { nullable: false })
  @Type(() => FileCreateManyAjuanSubsidiInput)
  data!: Array<FileCreateManyAjuanSubsidiInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

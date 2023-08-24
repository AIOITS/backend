import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PkbWhereInput } from './pkb-where.input'
import { Type } from 'class-transformer'
import { PkbUpdateWithoutStnkInput } from './pkb-update-without-stnk.input'

@InputType()
export class PkbUpdateToOneWithWhereWithoutStnkInput {
  @Field(() => PkbWhereInput, { nullable: true })
  @Type(() => PkbWhereInput)
  where?: PkbWhereInput

  @Field(() => PkbUpdateWithoutStnkInput, { nullable: false })
  @Type(() => PkbUpdateWithoutStnkInput)
  data!: PkbUpdateWithoutStnkInput
}

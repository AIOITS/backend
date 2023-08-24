import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { PkbUpdateWithoutStnkInput } from './pkb-update-without-stnk.input'
import { Type } from 'class-transformer'
import { PkbCreateWithoutStnkInput } from './pkb-create-without-stnk.input'
import { PkbWhereInput } from './pkb-where.input'

@InputType()
export class PkbUpsertWithoutStnkInput {
  @Field(() => PkbUpdateWithoutStnkInput, { nullable: false })
  @Type(() => PkbUpdateWithoutStnkInput)
  update!: PkbUpdateWithoutStnkInput

  @Field(() => PkbCreateWithoutStnkInput, { nullable: false })
  @Type(() => PkbCreateWithoutStnkInput)
  create!: PkbCreateWithoutStnkInput

  @Field(() => PkbWhereInput, { nullable: true })
  @Type(() => PkbWhereInput)
  where?: PkbWhereInput
}

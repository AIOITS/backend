import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { PkbUpdateManyMutationInput } from './pkb-update-many-mutation.input'
import { Type } from 'class-transformer'
import { PkbWhereInput } from './pkb-where.input'

@ArgsType()
export class UpdateManyPkbArgs {
  @Field(() => PkbUpdateManyMutationInput, { nullable: false })
  @Type(() => PkbUpdateManyMutationInput)
  data!: PkbUpdateManyMutationInput

  @Field(() => PkbWhereInput, { nullable: true })
  @Type(() => PkbWhereInput)
  where?: PkbWhereInput
}

import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SpbuUpdateManyMutationInput } from './spbu-update-many-mutation.input'
import { Type } from 'class-transformer'
import { SpbuWhereInput } from './spbu-where.input'

@ArgsType()
export class UpdateManySpbuArgs {
  @Field(() => SpbuUpdateManyMutationInput, { nullable: false })
  @Type(() => SpbuUpdateManyMutationInput)
  data!: SpbuUpdateManyMutationInput

  @Field(() => SpbuWhereInput, { nullable: true })
  @Type(() => SpbuWhereInput)
  where?: SpbuWhereInput
}

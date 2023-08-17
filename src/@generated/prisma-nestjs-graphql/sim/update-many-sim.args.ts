import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { SimUpdateManyMutationInput } from './sim-update-many-mutation.input'
import { Type } from 'class-transformer'
import { SimWhereInput } from './sim-where.input'

@ArgsType()
export class UpdateManySimArgs {
  @Field(() => SimUpdateManyMutationInput, { nullable: false })
  @Type(() => SimUpdateManyMutationInput)
  data!: SimUpdateManyMutationInput

  @Field(() => SimWhereInput, { nullable: true })
  @Type(() => SimWhereInput)
  where?: SimWhereInput
}

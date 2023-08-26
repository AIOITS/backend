import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AjuanSubsidiCreateWithoutUserInput } from './ajuan-subsidi-create-without-user.input'
import { Type } from 'class-transformer'
import { AjuanSubsidiCreateOrConnectWithoutUserInput } from './ajuan-subsidi-create-or-connect-without-user.input'
import { AjuanSubsidiCreateManyUserInputEnvelope } from './ajuan-subsidi-create-many-user-input-envelope.input'
import { Prisma } from '@prisma/client'
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input'

@InputType()
export class AjuanSubsidiCreateNestedManyWithoutUserInput {
  @Field(() => [AjuanSubsidiCreateWithoutUserInput], { nullable: true })
  @Type(() => AjuanSubsidiCreateWithoutUserInput)
  create?: Array<AjuanSubsidiCreateWithoutUserInput>

  @Field(() => [AjuanSubsidiCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AjuanSubsidiCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AjuanSubsidiCreateOrConnectWithoutUserInput>

  @Field(() => AjuanSubsidiCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AjuanSubsidiCreateManyUserInputEnvelope)
  createMany?: AjuanSubsidiCreateManyUserInputEnvelope

  @Field(() => [AjuanSubsidiWhereUniqueInput], { nullable: true })
  @Type(() => AjuanSubsidiWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>>
}

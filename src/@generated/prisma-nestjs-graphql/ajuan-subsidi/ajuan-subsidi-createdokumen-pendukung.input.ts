import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class AjuanSubsidiCreatedokumen_pendukungInput {
  @Field(() => [String], { nullable: false })
  set!: Array<string>
}

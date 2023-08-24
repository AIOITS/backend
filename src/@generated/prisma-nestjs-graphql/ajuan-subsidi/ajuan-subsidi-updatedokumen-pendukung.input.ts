import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ajuan_subsidiUpdatedokumen_pendukungInput {
  @Field(() => [String], { nullable: true })
  set?: Array<string>

  @Field(() => [String], { nullable: true })
  push?: Array<string>
}

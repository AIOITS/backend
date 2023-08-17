import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { GolonganDarah } from './golongan-darah.enum'

@InputType()
export class EnumGolonganDarahFieldUpdateOperationsInput {
  @Field(() => GolonganDarah, { nullable: true })
  set?: keyof typeof GolonganDarah
}

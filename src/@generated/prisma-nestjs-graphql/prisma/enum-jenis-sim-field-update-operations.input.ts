import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { JenisSim } from './jenis-sim.enum'

@InputType()
export class EnumJenisSimFieldUpdateOperationsInput {
  @Field(() => JenisSim, { nullable: true })
  set?: keyof typeof JenisSim
}

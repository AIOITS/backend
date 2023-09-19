import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { DeviceCreateManySpbuInput } from './device-create-many-spbu.input'
import { Type } from 'class-transformer'

@InputType()
export class DeviceCreateManySpbuInputEnvelope {
  @Field(() => [DeviceCreateManySpbuInput], { nullable: false })
  @Type(() => DeviceCreateManySpbuInput)
  data!: Array<DeviceCreateManySpbuInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}

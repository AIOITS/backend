import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Spbu } from '../spbu/spbu.model'
import { HistoryPengisian } from '../history-pengisian/history-pengisian.model'
import { DeviceCount } from './device-count.output'

@ObjectType()
export class Device {
  @Field(() => ID, { nullable: false })
  device_id!: string

  @Field(() => Int, { nullable: false })
  spbu_id!: number

  @Field(() => Spbu, { nullable: false })
  spbu?: Spbu

  @Field(() => [HistoryPengisian], { nullable: true })
  historyPengisian?: Array<HistoryPengisian>

  @Field(() => DeviceCount, { nullable: false })
  _count?: DeviceCount
}

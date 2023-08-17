import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { UserCountAggregate } from './user-count-aggregate.output'
import { UserAvgAggregate } from './user-avg-aggregate.output'
import { UserSumAggregate } from './user-sum-aggregate.output'
import { UserMinAggregate } from './user-min-aggregate.output'
import { UserMaxAggregate } from './user-max-aggregate.output'

@ObjectType()
export class UserGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number

  @Field(() => String, { nullable: false })
  nik!: string

  @Field(() => [String], { nullable: true })
  name?: Array<string>

  @Field(() => String, { nullable: true })
  email?: string

  @Field(() => String, { nullable: true })
  phone?: string

  @Field(() => String, { nullable: false })
  password!: string

  @Field(() => Int, { nullable: false })
  role!: number

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => UserCountAggregate, { nullable: true })
  _count?: UserCountAggregate

  @Field(() => UserAvgAggregate, { nullable: true })
  _avg?: UserAvgAggregate

  @Field(() => UserSumAggregate, { nullable: true })
  _sum?: UserSumAggregate

  @Field(() => UserMinAggregate, { nullable: true })
  _min?: UserMinAggregate

  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: UserMaxAggregate
}

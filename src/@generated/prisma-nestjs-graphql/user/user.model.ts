import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Ktp } from '../ktp/ktp.model'

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => String, { nullable: false })
  nik!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: true })
  email!: string | null

  @Field(() => String, { nullable: true })
  phone!: string | null

  @Field(() => String, { nullable: false })
  password!: string

  @Field(() => Float, { nullable: false, defaultValue: 0 })
  kuota_subsidi!: number

  @Field(() => Int, { nullable: false, defaultValue: 0 })
  saldo!: number

  @Field(() => Int, { nullable: false, defaultValue: 2 })
  role!: number

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Ktp, { nullable: false })
  ktp?: Ktp
}

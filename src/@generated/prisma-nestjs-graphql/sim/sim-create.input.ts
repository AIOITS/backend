import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { UserCreateNestedOneWithoutNomor_simInput } from '../user/user-create-nested-one-without-nomor-sim.input'

@InputType()
export class SIMCreateInput {
  @Field(() => String, { nullable: false })
  nomor_sim!: string

  @Field(() => String, { nullable: false })
  nama!: string

  @Field(() => String, { nullable: false })
  alamat!: string

  @Field(() => Int, { nullable: false })
  rt!: number

  @Field(() => Int, { nullable: false })
  rw!: number

  @Field(() => String, { nullable: false })
  kelurahan_desa!: string

  @Field(() => String, { nullable: false })
  kecamatan!: string

  @Field(() => String, { nullable: false })
  kabupaten!: string

  @Field(() => String, { nullable: false })
  pekerjaan!: string

  @Field(() => String, { nullable: false })
  kabupaten_terbit!: string

  @Field(() => Date, { nullable: false })
  tanggal_terbit!: Date | string

  @Field(() => String, { nullable: false })
  penerbit!: string

  @Field(() => Date, { nullable: false })
  berlaku_sampai!: Date | string

  @Field(() => UserCreateNestedOneWithoutNomor_simInput, { nullable: true })
  User?: UserCreateNestedOneWithoutNomor_simInput
}

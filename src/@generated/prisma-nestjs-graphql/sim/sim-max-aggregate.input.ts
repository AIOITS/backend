import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class SIMMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  nomor_sim?: true

  @Field(() => Boolean, { nullable: true })
  nama?: true

  @Field(() => Boolean, { nullable: true })
  alamat?: true

  @Field(() => Boolean, { nullable: true })
  rt?: true

  @Field(() => Boolean, { nullable: true })
  rw?: true

  @Field(() => Boolean, { nullable: true })
  kelurahan_desa?: true

  @Field(() => Boolean, { nullable: true })
  kecamatan?: true

  @Field(() => Boolean, { nullable: true })
  kabupaten?: true

  @Field(() => Boolean, { nullable: true })
  pekerjaan?: true

  @Field(() => Boolean, { nullable: true })
  kabupaten_terbit?: true

  @Field(() => Boolean, { nullable: true })
  tanggal_terbit?: true

  @Field(() => Boolean, { nullable: true })
  penerbit?: true

  @Field(() => Boolean, { nullable: true })
  berlaku_sampai?: true

  @Field(() => Boolean, { nullable: true })
  userId?: true
}

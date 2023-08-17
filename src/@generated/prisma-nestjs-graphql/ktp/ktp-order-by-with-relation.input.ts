import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input'

@InputType()
export class KtpOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  nik?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  nama?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  tempat_lahir?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  tanggal_lahir?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  alamat?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  rt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  rw?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  kelurahan_desa?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  kecamatan?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  kabupaten_kota?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  provinsi?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  golongan_darah?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  agama?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  status_perkawinan?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  pekerjaan?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  kewarganegaraan?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  tanggal_terbit?: keyof typeof SortOrder

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  User?: UserOrderByWithRelationInput
}

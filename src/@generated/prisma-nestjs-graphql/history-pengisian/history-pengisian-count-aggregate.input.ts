import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class HistoryPengisianCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true

  @Field(() => Boolean, { nullable: true })
  kategori_pengisian?: true

  @Field(() => Boolean, { nullable: true })
  nama_spbu?: true

  @Field(() => Boolean, { nullable: true })
  jumlah?: true

  @Field(() => Boolean, { nullable: true })
  createdAt?: true

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true

  @Field(() => Boolean, { nullable: true })
  user_id?: true

  @Field(() => Boolean, { nullable: true })
  nomor_stnk?: true

  @Field(() => Boolean, { nullable: true })
  _all?: true
}

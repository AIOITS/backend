import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KategoriPengisian } from '../prisma/kategori-pengisian.enum'
import { Float } from '@nestjs/graphql'
import { UserCreateNestedOneWithoutHistory_pengisianInput } from '../user/user-create-nested-one-without-history-pengisian.input'

@InputType()
export class HistoryPengisianCreateWithoutStnkInput {
  @Field(() => KategoriPengisian, { nullable: false })
  kategori_pengisian!: keyof typeof KategoriPengisian

  @Field(() => String, { nullable: false })
  nama_spbu!: string

  @Field(() => Float, { nullable: false })
  jumlah!: number

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => UserCreateNestedOneWithoutHistory_pengisianInput, {
    nullable: true,
  })
  user?: UserCreateNestedOneWithoutHistory_pengisianInput
}

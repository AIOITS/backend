import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { KTPWhereInput } from '../ktp/ktp-where.input'
import { Type } from 'class-transformer'
import { KTPOrderByWithRelationInput } from '../ktp/ktp-order-by-with-relation.input'
import { KTPWhereUniqueInput } from '../ktp/ktp-where-unique.input'
import { Int } from '@nestjs/graphql'
import { KTPScalarFieldEnum } from '../ktp/ktp-scalar-field.enum'

@ArgsType()
export class FindManyKtpArgs {
  @Field(() => KTPWhereInput, { nullable: true })
  @Type(() => KTPWhereInput)
  where?: KTPWhereInput

  @Field(() => [KTPOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<KTPOrderByWithRelationInput>

  @Field(() => KTPWhereUniqueInput, { nullable: true })
  cursor?: KTPWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [KTPScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof KTPScalarFieldEnum>
}

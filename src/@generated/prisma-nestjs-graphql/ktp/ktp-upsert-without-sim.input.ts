import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { KtpUpdateWithoutSimInput } from './ktp-update-without-sim.input'
import { Type } from 'class-transformer'
import { KtpCreateWithoutSimInput } from './ktp-create-without-sim.input'
import { KtpWhereInput } from './ktp-where.input'

@InputType()
export class KtpUpsertWithoutSimInput {
  @Field(() => KtpUpdateWithoutSimInput, { nullable: false })
  @Type(() => KtpUpdateWithoutSimInput)
  update!: KtpUpdateWithoutSimInput

  @Field(() => KtpCreateWithoutSimInput, { nullable: false })
  @Type(() => KtpCreateWithoutSimInput)
  create!: KtpCreateWithoutSimInput

  @Field(() => KtpWhereInput, { nullable: true })
  @Type(() => KtpWhereInput)
  where?: KtpWhereInput
}

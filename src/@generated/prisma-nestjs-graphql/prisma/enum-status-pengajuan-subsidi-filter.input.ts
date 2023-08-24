import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StatusPengajuanSubsidi } from './status-pengajuan-subsidi.enum'
import { NestedEnumStatusPengajuanSubsidiFilter } from './nested-enum-status-pengajuan-subsidi-filter.input'

@InputType()
export class EnumStatusPengajuanSubsidiFilter {
  @Field(() => StatusPengajuanSubsidi, { nullable: true })
  equals?: keyof typeof StatusPengajuanSubsidi;

  @Field(() => [StatusPengajuanSubsidi], { nullable: true })
  in?: Array<keyof typeof StatusPengajuanSubsidi>

  @Field(() => [StatusPengajuanSubsidi], { nullable: true })
  notIn?: Array<keyof typeof StatusPengajuanSubsidi>

  @Field(() => NestedEnumStatusPengajuanSubsidiFilter, { nullable: true })
  not?: NestedEnumStatusPengajuanSubsidiFilter
}

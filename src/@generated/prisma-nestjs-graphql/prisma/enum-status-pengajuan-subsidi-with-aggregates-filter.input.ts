import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StatusPengajuanSubsidi } from './status-pengajuan-subsidi.enum'
import { NestedEnumStatusPengajuanSubsidiWithAggregatesFilter } from './nested-enum-status-pengajuan-subsidi-with-aggregates-filter.input'
import { NestedIntFilter } from './nested-int-filter.input'
import { NestedEnumStatusPengajuanSubsidiFilter } from './nested-enum-status-pengajuan-subsidi-filter.input'

@InputType()
export class EnumStatusPengajuanSubsidiWithAggregatesFilter {
  @Field(() => StatusPengajuanSubsidi, { nullable: true })
  equals?: keyof typeof StatusPengajuanSubsidi;

  @Field(() => [StatusPengajuanSubsidi], { nullable: true })
  in?: Array<keyof typeof StatusPengajuanSubsidi>

  @Field(() => [StatusPengajuanSubsidi], { nullable: true })
  notIn?: Array<keyof typeof StatusPengajuanSubsidi>

  @Field(() => NestedEnumStatusPengajuanSubsidiWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumStatusPengajuanSubsidiWithAggregatesFilter

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter

  @Field(() => NestedEnumStatusPengajuanSubsidiFilter, { nullable: true })
  _min?: NestedEnumStatusPengajuanSubsidiFilter

  @Field(() => NestedEnumStatusPengajuanSubsidiFilter, { nullable: true })
  _max?: NestedEnumStatusPengajuanSubsidiFilter
}

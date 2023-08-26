import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { JenisSim } from './jenis-sim.enum'
import { NestedEnumJenisSimWithAggregatesFilter } from './nested-enum-jenis-sim-with-aggregates-filter.input'
import { NestedIntFilter } from './nested-int-filter.input'
import { NestedEnumJenisSimFilter } from './nested-enum-jenis-sim-filter.input'

@InputType()
export class EnumJenisSimWithAggregatesFilter {
  @Field(() => JenisSim, { nullable: true })
  equals?: keyof typeof JenisSim;

  @Field(() => [JenisSim], { nullable: true })
  in?: Array<keyof typeof JenisSim>

  @Field(() => [JenisSim], { nullable: true })
  notIn?: Array<keyof typeof JenisSim>

  @Field(() => NestedEnumJenisSimWithAggregatesFilter, { nullable: true })
  not?: NestedEnumJenisSimWithAggregatesFilter

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter

  @Field(() => NestedEnumJenisSimFilter, { nullable: true })
  _min?: NestedEnumJenisSimFilter

  @Field(() => NestedEnumJenisSimFilter, { nullable: true })
  _max?: NestedEnumJenisSimFilter
}

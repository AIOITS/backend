import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GolonganDarah } from './golongan-darah.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGolonganDarahFilter } from './nested-enum-golongan-darah-filter.input';

@InputType()
export class NestedEnumGolonganDarahWithAggregatesFilter {

    @Field(() => GolonganDarah, {nullable:true})
    equals?: keyof typeof GolonganDarah;

    @Field(() => [GolonganDarah], {nullable:true})
    in?: Array<keyof typeof GolonganDarah>;

    @Field(() => [GolonganDarah], {nullable:true})
    notIn?: Array<keyof typeof GolonganDarah>;

    @Field(() => NestedEnumGolonganDarahWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGolonganDarahWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumGolonganDarahFilter, {nullable:true})
    _min?: NestedEnumGolonganDarahFilter;

    @Field(() => NestedEnumGolonganDarahFilter, {nullable:true})
    _max?: NestedEnumGolonganDarahFilter;
}

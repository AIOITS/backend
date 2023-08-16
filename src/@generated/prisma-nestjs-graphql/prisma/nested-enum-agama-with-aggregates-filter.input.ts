import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Agama } from './agama.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAgamaFilter } from './nested-enum-agama-filter.input';

@InputType()
export class NestedEnumAgamaWithAggregatesFilter {

    @Field(() => Agama, {nullable:true})
    equals?: keyof typeof Agama;

    @Field(() => [Agama], {nullable:true})
    in?: Array<keyof typeof Agama>;

    @Field(() => [Agama], {nullable:true})
    notIn?: Array<keyof typeof Agama>;

    @Field(() => NestedEnumAgamaWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAgamaWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAgamaFilter, {nullable:true})
    _min?: NestedEnumAgamaFilter;

    @Field(() => NestedEnumAgamaFilter, {nullable:true})
    _max?: NestedEnumAgamaFilter;
}

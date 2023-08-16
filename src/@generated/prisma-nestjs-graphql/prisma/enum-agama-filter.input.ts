import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Agama } from './agama.enum';
import { NestedEnumAgamaFilter } from './nested-enum-agama-filter.input';

@InputType()
export class EnumAgamaFilter {

    @Field(() => Agama, {nullable:true})
    equals?: keyof typeof Agama;

    @Field(() => [Agama], {nullable:true})
    in?: Array<keyof typeof Agama>;

    @Field(() => [Agama], {nullable:true})
    notIn?: Array<keyof typeof Agama>;

    @Field(() => NestedEnumAgamaFilter, {nullable:true})
    not?: NestedEnumAgamaFilter;
}

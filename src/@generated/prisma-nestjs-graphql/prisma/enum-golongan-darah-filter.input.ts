import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GolonganDarah } from './golongan-darah.enum';
import { NestedEnumGolonganDarahFilter } from './nested-enum-golongan-darah-filter.input';

@InputType()
export class EnumGolonganDarahFilter {

    @Field(() => GolonganDarah, {nullable:true})
    equals?: keyof typeof GolonganDarah;

    @Field(() => [GolonganDarah], {nullable:true})
    in?: Array<keyof typeof GolonganDarah>;

    @Field(() => [GolonganDarah], {nullable:true})
    notIn?: Array<keyof typeof GolonganDarah>;

    @Field(() => NestedEnumGolonganDarahFilter, {nullable:true})
    not?: NestedEnumGolonganDarahFilter;
}

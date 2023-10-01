import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GolonganDarah } from './golongan-darah.enum';

@InputType()
export class NestedEnumGolonganDarahFilter {

    @Field(() => GolonganDarah, {nullable:true})
    equals?: keyof typeof GolonganDarah;

    @Field(() => [GolonganDarah], {nullable:true})
    in?: Array<keyof typeof GolonganDarah>;

    @Field(() => [GolonganDarah], {nullable:true})
    notIn?: Array<keyof typeof GolonganDarah>;

    @Field(() => NestedEnumGolonganDarahFilter, {nullable:true})
    not?: NestedEnumGolonganDarahFilter;
}

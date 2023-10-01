import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JenisKelamin } from './jenis-kelamin.enum';
import { NestedEnumJenisKelaminFilter } from './nested-enum-jenis-kelamin-filter.input';

@InputType()
export class EnumJenisKelaminFilter {

    @Field(() => JenisKelamin, {nullable:true})
    equals?: keyof typeof JenisKelamin;

    @Field(() => [JenisKelamin], {nullable:true})
    in?: Array<keyof typeof JenisKelamin>;

    @Field(() => [JenisKelamin], {nullable:true})
    notIn?: Array<keyof typeof JenisKelamin>;

    @Field(() => NestedEnumJenisKelaminFilter, {nullable:true})
    not?: NestedEnumJenisKelaminFilter;
}

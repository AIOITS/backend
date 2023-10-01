import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JenisKelamin } from './jenis-kelamin.enum';

@InputType()
export class NestedEnumJenisKelaminFilter {

    @Field(() => JenisKelamin, {nullable:true})
    equals?: keyof typeof JenisKelamin;

    @Field(() => [JenisKelamin], {nullable:true})
    in?: Array<keyof typeof JenisKelamin>;

    @Field(() => [JenisKelamin], {nullable:true})
    notIn?: Array<keyof typeof JenisKelamin>;

    @Field(() => NestedEnumJenisKelaminFilter, {nullable:true})
    not?: NestedEnumJenisKelaminFilter;
}

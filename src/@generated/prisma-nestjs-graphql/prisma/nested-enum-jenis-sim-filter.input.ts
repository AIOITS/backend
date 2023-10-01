import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JenisSim } from './jenis-sim.enum';

@InputType()
export class NestedEnumJenisSimFilter {

    @Field(() => JenisSim, {nullable:true})
    equals?: keyof typeof JenisSim;

    @Field(() => [JenisSim], {nullable:true})
    in?: Array<keyof typeof JenisSim>;

    @Field(() => [JenisSim], {nullable:true})
    notIn?: Array<keyof typeof JenisSim>;

    @Field(() => NestedEnumJenisSimFilter, {nullable:true})
    not?: NestedEnumJenisSimFilter;
}

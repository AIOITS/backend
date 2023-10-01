import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SimWhereInput } from './sim-where.input';

@InputType()
export class SimListRelationFilter {

    @Field(() => SimWhereInput, {nullable:true})
    every?: SimWhereInput;

    @Field(() => SimWhereInput, {nullable:true})
    some?: SimWhereInput;

    @Field(() => SimWhereInput, {nullable:true})
    none?: SimWhereInput;
}

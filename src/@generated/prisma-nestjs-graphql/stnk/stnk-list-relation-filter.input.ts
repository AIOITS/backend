import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StnkWhereInput } from './stnk-where.input';

@InputType()
export class StnkListRelationFilter {

    @Field(() => StnkWhereInput, {nullable:true})
    every?: StnkWhereInput;

    @Field(() => StnkWhereInput, {nullable:true})
    some?: StnkWhereInput;

    @Field(() => StnkWhereInput, {nullable:true})
    none?: StnkWhereInput;
}

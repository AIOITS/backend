import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AjuanSubsidiWhereInput } from './ajuan-subsidi-where.input';

@InputType()
export class AjuanSubsidiListRelationFilter {

    @Field(() => AjuanSubsidiWhereInput, {nullable:true})
    every?: AjuanSubsidiWhereInput;

    @Field(() => AjuanSubsidiWhereInput, {nullable:true})
    some?: AjuanSubsidiWhereInput;

    @Field(() => AjuanSubsidiWhereInput, {nullable:true})
    none?: AjuanSubsidiWhereInput;
}

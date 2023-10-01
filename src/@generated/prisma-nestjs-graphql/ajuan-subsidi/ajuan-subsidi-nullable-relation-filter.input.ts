import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AjuanSubsidiWhereInput } from './ajuan-subsidi-where.input';

@InputType()
export class AjuanSubsidiNullableRelationFilter {

    @Field(() => AjuanSubsidiWhereInput, {nullable:true})
    is?: AjuanSubsidiWhereInput;

    @Field(() => AjuanSubsidiWhereInput, {nullable:true})
    isNot?: AjuanSubsidiWhereInput;
}

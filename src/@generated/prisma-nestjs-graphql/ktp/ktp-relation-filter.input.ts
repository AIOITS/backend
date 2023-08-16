import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KTPWhereInput } from './ktp-where.input';

@InputType()
export class KTPRelationFilter {

    @Field(() => KTPWhereInput, {nullable:true})
    is?: KTPWhereInput;

    @Field(() => KTPWhereInput, {nullable:true})
    isNot?: KTPWhereInput;
}

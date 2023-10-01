import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpbuWhereInput } from './spbu-where.input';

@InputType()
export class SpbuRelationFilter {

    @Field(() => SpbuWhereInput, {nullable:true})
    is?: SpbuWhereInput;

    @Field(() => SpbuWhereInput, {nullable:true})
    isNot?: SpbuWhereInput;
}

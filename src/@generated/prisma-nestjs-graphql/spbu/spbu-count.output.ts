import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SpbuCount {

    @Field(() => Int, {nullable:false})
    device?: number;

    @Field(() => Int, {nullable:false})
    historyPengisian?: number;
}

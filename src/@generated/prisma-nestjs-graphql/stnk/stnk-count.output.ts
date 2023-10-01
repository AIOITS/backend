import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StnkCount {

    @Field(() => Int, {nullable:false})
    history_pengisian?: number;
}

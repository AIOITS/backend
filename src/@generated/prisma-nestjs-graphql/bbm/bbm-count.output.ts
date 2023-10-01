import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BbmCount {

    @Field(() => Int, {nullable:false})
    HistoryPengisian?: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class KTPAvgAggregate {

    @Field(() => Float, {nullable:true})
    rt?: number;

    @Field(() => Float, {nullable:true})
    rw?: number;
}

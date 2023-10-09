import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StnkSumAggregate {

    @Field(() => Int, {nullable:true})
    isi_silinder?: number;
}

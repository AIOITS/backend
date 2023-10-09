import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class StnkAvgAggregate {

    @Field(() => Float, {nullable:true})
    isi_silinder?: number;
}

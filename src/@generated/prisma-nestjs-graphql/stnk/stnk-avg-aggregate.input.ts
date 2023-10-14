import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StnkAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    isi_silinder?: true;
}

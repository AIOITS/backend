import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StnkSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    isi_silinder?: true;
}

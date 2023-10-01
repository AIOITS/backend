import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DeviceSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    spbu_id?: true;
}

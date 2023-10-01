import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DeviceAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    spbu_id?: true;
}

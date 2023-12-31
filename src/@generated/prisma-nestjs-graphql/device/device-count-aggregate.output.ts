import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DeviceCountAggregate {

    @Field(() => Int, {nullable:false})
    device_id!: number;

    @Field(() => Int, {nullable:false})
    spbu_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

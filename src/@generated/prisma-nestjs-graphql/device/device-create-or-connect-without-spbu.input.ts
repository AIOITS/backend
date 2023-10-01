import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { Type } from 'class-transformer';
import { DeviceCreateWithoutSpbuInput } from './device-create-without-spbu.input';

@InputType()
export class DeviceCreateOrConnectWithoutSpbuInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    @Type(() => DeviceWhereUniqueInput)
    where!: Prisma.AtLeast<DeviceWhereUniqueInput, 'device_id'>;

    @Field(() => DeviceCreateWithoutSpbuInput, {nullable:false})
    @Type(() => DeviceCreateWithoutSpbuInput)
    create!: DeviceCreateWithoutSpbuInput;
}

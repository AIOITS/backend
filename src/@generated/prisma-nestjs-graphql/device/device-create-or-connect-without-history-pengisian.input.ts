import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { Type } from 'class-transformer';
import { DeviceCreateWithoutHistoryPengisianInput } from './device-create-without-history-pengisian.input';

@InputType()
export class DeviceCreateOrConnectWithoutHistoryPengisianInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    @Type(() => DeviceWhereUniqueInput)
    where!: Prisma.AtLeast<DeviceWhereUniqueInput, 'device_id'>;

    @Field(() => DeviceCreateWithoutHistoryPengisianInput, {nullable:false})
    @Type(() => DeviceCreateWithoutHistoryPengisianInput)
    create!: DeviceCreateWithoutHistoryPengisianInput;
}

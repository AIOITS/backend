import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HistoryPengisianCreateWithoutDeviceInput } from './history-pengisian-create-without-device.input';
import { Type } from 'class-transformer';
import { HistoryPengisianCreateOrConnectWithoutDeviceInput } from './history-pengisian-create-or-connect-without-device.input';
import { HistoryPengisianCreateManyDeviceInputEnvelope } from './history-pengisian-create-many-device-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input';

@InputType()
export class HistoryPengisianUncheckedCreateNestedManyWithoutDeviceInput {

    @Field(() => [HistoryPengisianCreateWithoutDeviceInput], {nullable:true})
    @Type(() => HistoryPengisianCreateWithoutDeviceInput)
    create?: Array<HistoryPengisianCreateWithoutDeviceInput>;

    @Field(() => [HistoryPengisianCreateOrConnectWithoutDeviceInput], {nullable:true})
    @Type(() => HistoryPengisianCreateOrConnectWithoutDeviceInput)
    connectOrCreate?: Array<HistoryPengisianCreateOrConnectWithoutDeviceInput>;

    @Field(() => HistoryPengisianCreateManyDeviceInputEnvelope, {nullable:true})
    @Type(() => HistoryPengisianCreateManyDeviceInputEnvelope)
    createMany?: HistoryPengisianCreateManyDeviceInputEnvelope;

    @Field(() => [HistoryPengisianWhereUniqueInput], {nullable:true})
    @Type(() => HistoryPengisianWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>>;
}

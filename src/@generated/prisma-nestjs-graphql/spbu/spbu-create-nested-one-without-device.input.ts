import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpbuCreateWithoutDeviceInput } from './spbu-create-without-device.input';
import { Type } from 'class-transformer';
import { SpbuCreateOrConnectWithoutDeviceInput } from './spbu-create-or-connect-without-device.input';
import { Prisma } from '@prisma/client';
import { SpbuWhereUniqueInput } from './spbu-where-unique.input';

@InputType()
export class SpbuCreateNestedOneWithoutDeviceInput {

    @Field(() => SpbuCreateWithoutDeviceInput, {nullable:true})
    @Type(() => SpbuCreateWithoutDeviceInput)
    create?: SpbuCreateWithoutDeviceInput;

    @Field(() => SpbuCreateOrConnectWithoutDeviceInput, {nullable:true})
    @Type(() => SpbuCreateOrConnectWithoutDeviceInput)
    connectOrCreate?: SpbuCreateOrConnectWithoutDeviceInput;

    @Field(() => SpbuWhereUniqueInput, {nullable:true})
    @Type(() => SpbuWhereUniqueInput)
    connect?: Prisma.AtLeast<SpbuWhereUniqueInput, 'id'>;
}

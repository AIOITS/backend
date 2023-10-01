import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SpbuWhereUniqueInput } from './spbu-where-unique.input';
import { Type } from 'class-transformer';
import { SpbuCreateWithoutDeviceInput } from './spbu-create-without-device.input';

@InputType()
export class SpbuCreateOrConnectWithoutDeviceInput {

    @Field(() => SpbuWhereUniqueInput, {nullable:false})
    @Type(() => SpbuWhereUniqueInput)
    where!: Prisma.AtLeast<SpbuWhereUniqueInput, 'id'>;

    @Field(() => SpbuCreateWithoutDeviceInput, {nullable:false})
    @Type(() => SpbuCreateWithoutDeviceInput)
    create!: SpbuCreateWithoutDeviceInput;
}

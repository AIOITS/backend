import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HistoryPengisianCreateWithoutSpbuInput } from './history-pengisian-create-without-spbu.input';
import { Type } from 'class-transformer';
import { HistoryPengisianCreateOrConnectWithoutSpbuInput } from './history-pengisian-create-or-connect-without-spbu.input';
import { HistoryPengisianCreateManySpbuInputEnvelope } from './history-pengisian-create-many-spbu-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input';

@InputType()
export class HistoryPengisianCreateNestedManyWithoutSpbuInput {

    @Field(() => [HistoryPengisianCreateWithoutSpbuInput], {nullable:true})
    @Type(() => HistoryPengisianCreateWithoutSpbuInput)
    create?: Array<HistoryPengisianCreateWithoutSpbuInput>;

    @Field(() => [HistoryPengisianCreateOrConnectWithoutSpbuInput], {nullable:true})
    @Type(() => HistoryPengisianCreateOrConnectWithoutSpbuInput)
    connectOrCreate?: Array<HistoryPengisianCreateOrConnectWithoutSpbuInput>;

    @Field(() => HistoryPengisianCreateManySpbuInputEnvelope, {nullable:true})
    @Type(() => HistoryPengisianCreateManySpbuInputEnvelope)
    createMany?: HistoryPengisianCreateManySpbuInputEnvelope;

    @Field(() => [HistoryPengisianWhereUniqueInput], {nullable:true})
    @Type(() => HistoryPengisianWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>>;
}

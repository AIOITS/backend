import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HistoryPengisianCreateWithoutBbmInput } from './history-pengisian-create-without-bbm.input';
import { Type } from 'class-transformer';
import { HistoryPengisianCreateOrConnectWithoutBbmInput } from './history-pengisian-create-or-connect-without-bbm.input';
import { HistoryPengisianCreateManyBbmInputEnvelope } from './history-pengisian-create-many-bbm-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input';

@InputType()
export class HistoryPengisianUncheckedCreateNestedManyWithoutBbmInput {

    @Field(() => [HistoryPengisianCreateWithoutBbmInput], {nullable:true})
    @Type(() => HistoryPengisianCreateWithoutBbmInput)
    create?: Array<HistoryPengisianCreateWithoutBbmInput>;

    @Field(() => [HistoryPengisianCreateOrConnectWithoutBbmInput], {nullable:true})
    @Type(() => HistoryPengisianCreateOrConnectWithoutBbmInput)
    connectOrCreate?: Array<HistoryPengisianCreateOrConnectWithoutBbmInput>;

    @Field(() => HistoryPengisianCreateManyBbmInputEnvelope, {nullable:true})
    @Type(() => HistoryPengisianCreateManyBbmInputEnvelope)
    createMany?: HistoryPengisianCreateManyBbmInputEnvelope;

    @Field(() => [HistoryPengisianWhereUniqueInput], {nullable:true})
    @Type(() => HistoryPengisianWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>>;
}

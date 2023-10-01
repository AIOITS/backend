import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HistoryPengisianCreateWithoutUserInput } from './history-pengisian-create-without-user.input';
import { Type } from 'class-transformer';
import { HistoryPengisianCreateOrConnectWithoutUserInput } from './history-pengisian-create-or-connect-without-user.input';
import { HistoryPengisianCreateManyUserInputEnvelope } from './history-pengisian-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input';

@InputType()
export class HistoryPengisianCreateNestedManyWithoutUserInput {

    @Field(() => [HistoryPengisianCreateWithoutUserInput], {nullable:true})
    @Type(() => HistoryPengisianCreateWithoutUserInput)
    create?: Array<HistoryPengisianCreateWithoutUserInput>;

    @Field(() => [HistoryPengisianCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => HistoryPengisianCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<HistoryPengisianCreateOrConnectWithoutUserInput>;

    @Field(() => HistoryPengisianCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => HistoryPengisianCreateManyUserInputEnvelope)
    createMany?: HistoryPengisianCreateManyUserInputEnvelope;

    @Field(() => [HistoryPengisianWhereUniqueInput], {nullable:true})
    @Type(() => HistoryPengisianWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>>;
}

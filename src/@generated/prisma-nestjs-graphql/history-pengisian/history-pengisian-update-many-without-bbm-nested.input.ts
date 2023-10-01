import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HistoryPengisianCreateWithoutBbmInput } from './history-pengisian-create-without-bbm.input';
import { Type } from 'class-transformer';
import { HistoryPengisianCreateOrConnectWithoutBbmInput } from './history-pengisian-create-or-connect-without-bbm.input';
import { HistoryPengisianUpsertWithWhereUniqueWithoutBbmInput } from './history-pengisian-upsert-with-where-unique-without-bbm.input';
import { HistoryPengisianCreateManyBbmInputEnvelope } from './history-pengisian-create-many-bbm-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input';
import { HistoryPengisianUpdateWithWhereUniqueWithoutBbmInput } from './history-pengisian-update-with-where-unique-without-bbm.input';
import { HistoryPengisianUpdateManyWithWhereWithoutBbmInput } from './history-pengisian-update-many-with-where-without-bbm.input';
import { HistoryPengisianScalarWhereInput } from './history-pengisian-scalar-where.input';

@InputType()
export class HistoryPengisianUpdateManyWithoutBbmNestedInput {

    @Field(() => [HistoryPengisianCreateWithoutBbmInput], {nullable:true})
    @Type(() => HistoryPengisianCreateWithoutBbmInput)
    create?: Array<HistoryPengisianCreateWithoutBbmInput>;

    @Field(() => [HistoryPengisianCreateOrConnectWithoutBbmInput], {nullable:true})
    @Type(() => HistoryPengisianCreateOrConnectWithoutBbmInput)
    connectOrCreate?: Array<HistoryPengisianCreateOrConnectWithoutBbmInput>;

    @Field(() => [HistoryPengisianUpsertWithWhereUniqueWithoutBbmInput], {nullable:true})
    @Type(() => HistoryPengisianUpsertWithWhereUniqueWithoutBbmInput)
    upsert?: Array<HistoryPengisianUpsertWithWhereUniqueWithoutBbmInput>;

    @Field(() => HistoryPengisianCreateManyBbmInputEnvelope, {nullable:true})
    @Type(() => HistoryPengisianCreateManyBbmInputEnvelope)
    createMany?: HistoryPengisianCreateManyBbmInputEnvelope;

    @Field(() => [HistoryPengisianWhereUniqueInput], {nullable:true})
    @Type(() => HistoryPengisianWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>>;

    @Field(() => [HistoryPengisianWhereUniqueInput], {nullable:true})
    @Type(() => HistoryPengisianWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>>;

    @Field(() => [HistoryPengisianWhereUniqueInput], {nullable:true})
    @Type(() => HistoryPengisianWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>>;

    @Field(() => [HistoryPengisianWhereUniqueInput], {nullable:true})
    @Type(() => HistoryPengisianWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>>;

    @Field(() => [HistoryPengisianUpdateWithWhereUniqueWithoutBbmInput], {nullable:true})
    @Type(() => HistoryPengisianUpdateWithWhereUniqueWithoutBbmInput)
    update?: Array<HistoryPengisianUpdateWithWhereUniqueWithoutBbmInput>;

    @Field(() => [HistoryPengisianUpdateManyWithWhereWithoutBbmInput], {nullable:true})
    @Type(() => HistoryPengisianUpdateManyWithWhereWithoutBbmInput)
    updateMany?: Array<HistoryPengisianUpdateManyWithWhereWithoutBbmInput>;

    @Field(() => [HistoryPengisianScalarWhereInput], {nullable:true})
    @Type(() => HistoryPengisianScalarWhereInput)
    deleteMany?: Array<HistoryPengisianScalarWhereInput>;
}

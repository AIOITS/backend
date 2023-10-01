import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BbmCreateWithoutHistoryPengisianInput } from './bbm-create-without-history-pengisian.input';
import { Type } from 'class-transformer';
import { BbmCreateOrConnectWithoutHistoryPengisianInput } from './bbm-create-or-connect-without-history-pengisian.input';
import { BbmUpsertWithoutHistoryPengisianInput } from './bbm-upsert-without-history-pengisian.input';
import { BbmWhereInput } from './bbm-where.input';
import { Prisma } from '@prisma/client';
import { BbmWhereUniqueInput } from './bbm-where-unique.input';
import { BbmUpdateToOneWithWhereWithoutHistoryPengisianInput } from './bbm-update-to-one-with-where-without-history-pengisian.input';

@InputType()
export class BbmUpdateOneWithoutHistoryPengisianNestedInput {

    @Field(() => BbmCreateWithoutHistoryPengisianInput, {nullable:true})
    @Type(() => BbmCreateWithoutHistoryPengisianInput)
    create?: BbmCreateWithoutHistoryPengisianInput;

    @Field(() => BbmCreateOrConnectWithoutHistoryPengisianInput, {nullable:true})
    @Type(() => BbmCreateOrConnectWithoutHistoryPengisianInput)
    connectOrCreate?: BbmCreateOrConnectWithoutHistoryPengisianInput;

    @Field(() => BbmUpsertWithoutHistoryPengisianInput, {nullable:true})
    @Type(() => BbmUpsertWithoutHistoryPengisianInput)
    upsert?: BbmUpsertWithoutHistoryPengisianInput;

    @Field(() => BbmWhereInput, {nullable:true})
    @Type(() => BbmWhereInput)
    disconnect?: BbmWhereInput;

    @Field(() => BbmWhereInput, {nullable:true})
    @Type(() => BbmWhereInput)
    delete?: BbmWhereInput;

    @Field(() => BbmWhereUniqueInput, {nullable:true})
    @Type(() => BbmWhereUniqueInput)
    connect?: Prisma.AtLeast<BbmWhereUniqueInput, 'id'>;

    @Field(() => BbmUpdateToOneWithWhereWithoutHistoryPengisianInput, {nullable:true})
    @Type(() => BbmUpdateToOneWithWhereWithoutHistoryPengisianInput)
    update?: BbmUpdateToOneWithWhereWithoutHistoryPengisianInput;
}

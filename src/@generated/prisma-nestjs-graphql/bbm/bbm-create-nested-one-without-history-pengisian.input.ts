import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BbmCreateWithoutHistoryPengisianInput } from './bbm-create-without-history-pengisian.input';
import { Type } from 'class-transformer';
import { BbmCreateOrConnectWithoutHistoryPengisianInput } from './bbm-create-or-connect-without-history-pengisian.input';
import { Prisma } from '@prisma/client';
import { BbmWhereUniqueInput } from './bbm-where-unique.input';

@InputType()
export class BbmCreateNestedOneWithoutHistoryPengisianInput {

    @Field(() => BbmCreateWithoutHistoryPengisianInput, {nullable:true})
    @Type(() => BbmCreateWithoutHistoryPengisianInput)
    create?: BbmCreateWithoutHistoryPengisianInput;

    @Field(() => BbmCreateOrConnectWithoutHistoryPengisianInput, {nullable:true})
    @Type(() => BbmCreateOrConnectWithoutHistoryPengisianInput)
    connectOrCreate?: BbmCreateOrConnectWithoutHistoryPengisianInput;

    @Field(() => BbmWhereUniqueInput, {nullable:true})
    @Type(() => BbmWhereUniqueInput)
    connect?: Prisma.AtLeast<BbmWhereUniqueInput, 'id'>;
}

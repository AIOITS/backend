import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BbmWhereUniqueInput } from './bbm-where-unique.input';
import { Type } from 'class-transformer';
import { BbmCreateWithoutHistoryPengisianInput } from './bbm-create-without-history-pengisian.input';

@InputType()
export class BbmCreateOrConnectWithoutHistoryPengisianInput {

    @Field(() => BbmWhereUniqueInput, {nullable:false})
    @Type(() => BbmWhereUniqueInput)
    where!: Prisma.AtLeast<BbmWhereUniqueInput, 'id'>;

    @Field(() => BbmCreateWithoutHistoryPengisianInput, {nullable:false})
    @Type(() => BbmCreateWithoutHistoryPengisianInput)
    create!: BbmCreateWithoutHistoryPengisianInput;
}

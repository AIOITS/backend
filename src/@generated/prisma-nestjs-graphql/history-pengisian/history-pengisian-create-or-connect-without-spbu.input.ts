import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input';
import { Type } from 'class-transformer';
import { HistoryPengisianCreateWithoutSpbuInput } from './history-pengisian-create-without-spbu.input';

@InputType()
export class HistoryPengisianCreateOrConnectWithoutSpbuInput {

    @Field(() => HistoryPengisianWhereUniqueInput, {nullable:false})
    @Type(() => HistoryPengisianWhereUniqueInput)
    where!: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>;

    @Field(() => HistoryPengisianCreateWithoutSpbuInput, {nullable:false})
    @Type(() => HistoryPengisianCreateWithoutSpbuInput)
    create!: HistoryPengisianCreateWithoutSpbuInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input';
import { Type } from 'class-transformer';
import { HistoryPengisianUpdateWithoutSpbuInput } from './history-pengisian-update-without-spbu.input';
import { HistoryPengisianCreateWithoutSpbuInput } from './history-pengisian-create-without-spbu.input';

@InputType()
export class HistoryPengisianUpsertWithWhereUniqueWithoutSpbuInput {

    @Field(() => HistoryPengisianWhereUniqueInput, {nullable:false})
    @Type(() => HistoryPengisianWhereUniqueInput)
    where!: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>;

    @Field(() => HistoryPengisianUpdateWithoutSpbuInput, {nullable:false})
    @Type(() => HistoryPengisianUpdateWithoutSpbuInput)
    update!: HistoryPengisianUpdateWithoutSpbuInput;

    @Field(() => HistoryPengisianCreateWithoutSpbuInput, {nullable:false})
    @Type(() => HistoryPengisianCreateWithoutSpbuInput)
    create!: HistoryPengisianCreateWithoutSpbuInput;
}

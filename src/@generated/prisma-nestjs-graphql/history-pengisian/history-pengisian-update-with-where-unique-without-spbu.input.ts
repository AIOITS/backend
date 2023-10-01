import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input';
import { Type } from 'class-transformer';
import { HistoryPengisianUpdateWithoutSpbuInput } from './history-pengisian-update-without-spbu.input';

@InputType()
export class HistoryPengisianUpdateWithWhereUniqueWithoutSpbuInput {

    @Field(() => HistoryPengisianWhereUniqueInput, {nullable:false})
    @Type(() => HistoryPengisianWhereUniqueInput)
    where!: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>;

    @Field(() => HistoryPengisianUpdateWithoutSpbuInput, {nullable:false})
    @Type(() => HistoryPengisianUpdateWithoutSpbuInput)
    data!: HistoryPengisianUpdateWithoutSpbuInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HistoryPengisianWhereUniqueInput } from './history-pengisian-where-unique.input';
import { Type } from 'class-transformer';
import { HistoryPengisianCreateInput } from './history-pengisian-create.input';
import { HistoryPengisianUpdateInput } from './history-pengisian-update.input';

@ArgsType()
export class UpsertOneHistoryPengisianArgs {

    @Field(() => HistoryPengisianWhereUniqueInput, {nullable:false})
    @Type(() => HistoryPengisianWhereUniqueInput)
    where!: Prisma.AtLeast<HistoryPengisianWhereUniqueInput, 'id'>;

    @Field(() => HistoryPengisianCreateInput, {nullable:false})
    @Type(() => HistoryPengisianCreateInput)
    create!: HistoryPengisianCreateInput;

    @Field(() => HistoryPengisianUpdateInput, {nullable:false})
    @Type(() => HistoryPengisianUpdateInput)
    update!: HistoryPengisianUpdateInput;
}

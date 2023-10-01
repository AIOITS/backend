import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SpbuWhereUniqueInput } from './spbu-where-unique.input';
import { Type } from 'class-transformer';
import { SpbuCreateWithoutHistoryPengisianInput } from './spbu-create-without-history-pengisian.input';

@InputType()
export class SpbuCreateOrConnectWithoutHistoryPengisianInput {

    @Field(() => SpbuWhereUniqueInput, {nullable:false})
    @Type(() => SpbuWhereUniqueInput)
    where!: Prisma.AtLeast<SpbuWhereUniqueInput, 'id'>;

    @Field(() => SpbuCreateWithoutHistoryPengisianInput, {nullable:false})
    @Type(() => SpbuCreateWithoutHistoryPengisianInput)
    create!: SpbuCreateWithoutHistoryPengisianInput;
}

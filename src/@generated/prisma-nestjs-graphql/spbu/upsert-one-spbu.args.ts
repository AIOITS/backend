import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SpbuWhereUniqueInput } from './spbu-where-unique.input';
import { Type } from 'class-transformer';
import { SpbuCreateInput } from './spbu-create.input';
import { SpbuUpdateInput } from './spbu-update.input';

@ArgsType()
export class UpsertOneSpbuArgs {

    @Field(() => SpbuWhereUniqueInput, {nullable:false})
    @Type(() => SpbuWhereUniqueInput)
    where!: Prisma.AtLeast<SpbuWhereUniqueInput, 'id'>;

    @Field(() => SpbuCreateInput, {nullable:false})
    @Type(() => SpbuCreateInput)
    create!: SpbuCreateInput;

    @Field(() => SpbuUpdateInput, {nullable:false})
    @Type(() => SpbuUpdateInput)
    update!: SpbuUpdateInput;
}

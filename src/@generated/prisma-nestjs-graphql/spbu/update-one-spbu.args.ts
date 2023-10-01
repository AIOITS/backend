import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpbuUpdateInput } from './spbu-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SpbuWhereUniqueInput } from './spbu-where-unique.input';

@ArgsType()
export class UpdateOneSpbuArgs {

    @Field(() => SpbuUpdateInput, {nullable:false})
    @Type(() => SpbuUpdateInput)
    data!: SpbuUpdateInput;

    @Field(() => SpbuWhereUniqueInput, {nullable:false})
    @Type(() => SpbuWhereUniqueInput)
    where!: Prisma.AtLeast<SpbuWhereUniqueInput, 'id'>;
}

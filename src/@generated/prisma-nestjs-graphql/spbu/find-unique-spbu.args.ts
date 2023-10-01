import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SpbuWhereUniqueInput } from './spbu-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSpbuArgs {

    @Field(() => SpbuWhereUniqueInput, {nullable:false})
    @Type(() => SpbuWhereUniqueInput)
    where!: Prisma.AtLeast<SpbuWhereUniqueInput, 'id'>;
}

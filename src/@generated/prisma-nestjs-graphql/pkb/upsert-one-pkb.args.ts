import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PkbWhereUniqueInput } from './pkb-where-unique.input';
import { Type } from 'class-transformer';
import { PkbCreateInput } from './pkb-create.input';
import { PkbUpdateInput } from './pkb-update.input';

@ArgsType()
export class UpsertOnePkbArgs {

    @Field(() => PkbWhereUniqueInput, {nullable:false})
    @Type(() => PkbWhereUniqueInput)
    where!: Prisma.AtLeast<PkbWhereUniqueInput, 'nomor_pkb'>;

    @Field(() => PkbCreateInput, {nullable:false})
    @Type(() => PkbCreateInput)
    create!: PkbCreateInput;

    @Field(() => PkbUpdateInput, {nullable:false})
    @Type(() => PkbUpdateInput)
    update!: PkbUpdateInput;
}

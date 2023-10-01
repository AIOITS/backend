import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SimWhereUniqueInput } from './sim-where-unique.input';
import { Type } from 'class-transformer';
import { SimCreateInput } from './sim-create.input';
import { SimUpdateInput } from './sim-update.input';

@ArgsType()
export class UpsertOneSimArgs {

    @Field(() => SimWhereUniqueInput, {nullable:false})
    @Type(() => SimWhereUniqueInput)
    where!: Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>;

    @Field(() => SimCreateInput, {nullable:false})
    @Type(() => SimCreateInput)
    create!: SimCreateInput;

    @Field(() => SimUpdateInput, {nullable:false})
    @Type(() => SimUpdateInput)
    update!: SimUpdateInput;
}

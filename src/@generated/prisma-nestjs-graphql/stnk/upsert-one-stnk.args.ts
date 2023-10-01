import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StnkWhereUniqueInput } from './stnk-where-unique.input';
import { Type } from 'class-transformer';
import { StnkCreateInput } from './stnk-create.input';
import { StnkUpdateInput } from './stnk-update.input';

@ArgsType()
export class UpsertOneStnkArgs {

    @Field(() => StnkWhereUniqueInput, {nullable:false})
    @Type(() => StnkWhereUniqueInput)
    where!: Prisma.AtLeast<StnkWhereUniqueInput, 'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'>;

    @Field(() => StnkCreateInput, {nullable:false})
    @Type(() => StnkCreateInput)
    create!: StnkCreateInput;

    @Field(() => StnkUpdateInput, {nullable:false})
    @Type(() => StnkUpdateInput)
    update!: StnkUpdateInput;
}

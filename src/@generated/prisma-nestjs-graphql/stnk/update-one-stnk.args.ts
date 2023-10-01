import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StnkUpdateInput } from './stnk-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { StnkWhereUniqueInput } from './stnk-where-unique.input';

@ArgsType()
export class UpdateOneStnkArgs {

    @Field(() => StnkUpdateInput, {nullable:false})
    @Type(() => StnkUpdateInput)
    data!: StnkUpdateInput;

    @Field(() => StnkWhereUniqueInput, {nullable:false})
    @Type(() => StnkWhereUniqueInput)
    where!: Prisma.AtLeast<StnkWhereUniqueInput, 'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'>;
}

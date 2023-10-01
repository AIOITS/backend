import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StnkWhereUniqueInput } from './stnk-where-unique.input';
import { Type } from 'class-transformer';
import { StnkCreateWithoutHistory_pengisianInput } from './stnk-create-without-history-pengisian.input';

@InputType()
export class StnkCreateOrConnectWithoutHistory_pengisianInput {

    @Field(() => StnkWhereUniqueInput, {nullable:false})
    @Type(() => StnkWhereUniqueInput)
    where!: Prisma.AtLeast<StnkWhereUniqueInput, 'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'>;

    @Field(() => StnkCreateWithoutHistory_pengisianInput, {nullable:false})
    @Type(() => StnkCreateWithoutHistory_pengisianInput)
    create!: StnkCreateWithoutHistory_pengisianInput;
}

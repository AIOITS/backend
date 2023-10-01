import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StnkWhereUniqueInput } from './stnk-where-unique.input';
import { Type } from 'class-transformer';
import { StnkCreateWithoutPkbInput } from './stnk-create-without-pkb.input';

@InputType()
export class StnkCreateOrConnectWithoutPkbInput {

    @Field(() => StnkWhereUniqueInput, {nullable:false})
    @Type(() => StnkWhereUniqueInput)
    where!: Prisma.AtLeast<StnkWhereUniqueInput, 'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'>;

    @Field(() => StnkCreateWithoutPkbInput, {nullable:false})
    @Type(() => StnkCreateWithoutPkbInput)
    create!: StnkCreateWithoutPkbInput;
}

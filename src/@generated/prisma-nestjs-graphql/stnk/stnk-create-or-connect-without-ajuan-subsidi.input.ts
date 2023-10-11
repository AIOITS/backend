import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StnkWhereUniqueInput } from './stnk-where-unique.input';
import { Type } from 'class-transformer';
import { StnkCreateWithoutAjuanSubsidiInput } from './stnk-create-without-ajuan-subsidi.input';

@InputType()
export class StnkCreateOrConnectWithoutAjuanSubsidiInput {

    @Field(() => StnkWhereUniqueInput, {nullable:false})
    @Type(() => StnkWhereUniqueInput)
    where!: Prisma.AtLeast<StnkWhereUniqueInput, 'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'>;

    @Field(() => StnkCreateWithoutAjuanSubsidiInput, {nullable:false})
    @Type(() => StnkCreateWithoutAjuanSubsidiInput)
    create!: StnkCreateWithoutAjuanSubsidiInput;
}

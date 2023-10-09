import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StnkWhereUniqueInput } from './stnk-where-unique.input';
import { Type } from 'class-transformer';
import { StnkCreateWithoutSubsidy_quotaInput } from './stnk-create-without-subsidy-quota.input';

@InputType()
export class StnkCreateOrConnectWithoutSubsidy_quotaInput {

    @Field(() => StnkWhereUniqueInput, {nullable:false})
    @Type(() => StnkWhereUniqueInput)
    where!: Prisma.AtLeast<StnkWhereUniqueInput, 'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'>;

    @Field(() => StnkCreateWithoutSubsidy_quotaInput, {nullable:false})
    @Type(() => StnkCreateWithoutSubsidy_quotaInput)
    create!: StnkCreateWithoutSubsidy_quotaInput;
}

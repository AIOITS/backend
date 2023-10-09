import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StnkCreateWithoutSubsidy_quotaInput } from './stnk-create-without-subsidy-quota.input';
import { Type } from 'class-transformer';
import { StnkCreateOrConnectWithoutSubsidy_quotaInput } from './stnk-create-or-connect-without-subsidy-quota.input';
import { StnkUpsertWithoutSubsidy_quotaInput } from './stnk-upsert-without-subsidy-quota.input';
import { Prisma } from '@prisma/client';
import { StnkWhereUniqueInput } from './stnk-where-unique.input';
import { StnkUpdateToOneWithWhereWithoutSubsidy_quotaInput } from './stnk-update-to-one-with-where-without-subsidy-quota.input';

@InputType()
export class StnkUpdateOneRequiredWithoutSubsidy_quotaNestedInput {

    @Field(() => StnkCreateWithoutSubsidy_quotaInput, {nullable:true})
    @Type(() => StnkCreateWithoutSubsidy_quotaInput)
    create?: StnkCreateWithoutSubsidy_quotaInput;

    @Field(() => StnkCreateOrConnectWithoutSubsidy_quotaInput, {nullable:true})
    @Type(() => StnkCreateOrConnectWithoutSubsidy_quotaInput)
    connectOrCreate?: StnkCreateOrConnectWithoutSubsidy_quotaInput;

    @Field(() => StnkUpsertWithoutSubsidy_quotaInput, {nullable:true})
    @Type(() => StnkUpsertWithoutSubsidy_quotaInput)
    upsert?: StnkUpsertWithoutSubsidy_quotaInput;

    @Field(() => StnkWhereUniqueInput, {nullable:true})
    @Type(() => StnkWhereUniqueInput)
    connect?: Prisma.AtLeast<StnkWhereUniqueInput, 'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'>;

    @Field(() => StnkUpdateToOneWithWhereWithoutSubsidy_quotaInput, {nullable:true})
    @Type(() => StnkUpdateToOneWithWhereWithoutSubsidy_quotaInput)
    update?: StnkUpdateToOneWithWhereWithoutSubsidy_quotaInput;
}

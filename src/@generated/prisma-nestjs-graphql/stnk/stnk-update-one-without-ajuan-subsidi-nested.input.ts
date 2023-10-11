import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StnkCreateWithoutAjuanSubsidiInput } from './stnk-create-without-ajuan-subsidi.input';
import { Type } from 'class-transformer';
import { StnkCreateOrConnectWithoutAjuanSubsidiInput } from './stnk-create-or-connect-without-ajuan-subsidi.input';
import { StnkUpsertWithoutAjuanSubsidiInput } from './stnk-upsert-without-ajuan-subsidi.input';
import { StnkWhereInput } from './stnk-where.input';
import { Prisma } from '@prisma/client';
import { StnkWhereUniqueInput } from './stnk-where-unique.input';
import { StnkUpdateToOneWithWhereWithoutAjuanSubsidiInput } from './stnk-update-to-one-with-where-without-ajuan-subsidi.input';

@InputType()
export class StnkUpdateOneWithoutAjuanSubsidiNestedInput {

    @Field(() => StnkCreateWithoutAjuanSubsidiInput, {nullable:true})
    @Type(() => StnkCreateWithoutAjuanSubsidiInput)
    create?: StnkCreateWithoutAjuanSubsidiInput;

    @Field(() => StnkCreateOrConnectWithoutAjuanSubsidiInput, {nullable:true})
    @Type(() => StnkCreateOrConnectWithoutAjuanSubsidiInput)
    connectOrCreate?: StnkCreateOrConnectWithoutAjuanSubsidiInput;

    @Field(() => StnkUpsertWithoutAjuanSubsidiInput, {nullable:true})
    @Type(() => StnkUpsertWithoutAjuanSubsidiInput)
    upsert?: StnkUpsertWithoutAjuanSubsidiInput;

    @Field(() => StnkWhereInput, {nullable:true})
    @Type(() => StnkWhereInput)
    disconnect?: StnkWhereInput;

    @Field(() => StnkWhereInput, {nullable:true})
    @Type(() => StnkWhereInput)
    delete?: StnkWhereInput;

    @Field(() => StnkWhereUniqueInput, {nullable:true})
    @Type(() => StnkWhereUniqueInput)
    connect?: Prisma.AtLeast<StnkWhereUniqueInput, 'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'>;

    @Field(() => StnkUpdateToOneWithWhereWithoutAjuanSubsidiInput, {nullable:true})
    @Type(() => StnkUpdateToOneWithWhereWithoutAjuanSubsidiInput)
    update?: StnkUpdateToOneWithWhereWithoutAjuanSubsidiInput;
}

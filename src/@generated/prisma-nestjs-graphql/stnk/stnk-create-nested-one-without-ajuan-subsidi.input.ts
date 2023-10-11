import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StnkCreateWithoutAjuanSubsidiInput } from './stnk-create-without-ajuan-subsidi.input';
import { Type } from 'class-transformer';
import { StnkCreateOrConnectWithoutAjuanSubsidiInput } from './stnk-create-or-connect-without-ajuan-subsidi.input';
import { Prisma } from '@prisma/client';
import { StnkWhereUniqueInput } from './stnk-where-unique.input';

@InputType()
export class StnkCreateNestedOneWithoutAjuanSubsidiInput {

    @Field(() => StnkCreateWithoutAjuanSubsidiInput, {nullable:true})
    @Type(() => StnkCreateWithoutAjuanSubsidiInput)
    create?: StnkCreateWithoutAjuanSubsidiInput;

    @Field(() => StnkCreateOrConnectWithoutAjuanSubsidiInput, {nullable:true})
    @Type(() => StnkCreateOrConnectWithoutAjuanSubsidiInput)
    connectOrCreate?: StnkCreateOrConnectWithoutAjuanSubsidiInput;

    @Field(() => StnkWhereUniqueInput, {nullable:true})
    @Type(() => StnkWhereUniqueInput)
    connect?: Prisma.AtLeast<StnkWhereUniqueInput, 'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'>;
}

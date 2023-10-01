import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StnkCreateWithoutPkbInput } from './stnk-create-without-pkb.input';
import { Type } from 'class-transformer';
import { StnkCreateOrConnectWithoutPkbInput } from './stnk-create-or-connect-without-pkb.input';
import { Prisma } from '@prisma/client';
import { StnkWhereUniqueInput } from './stnk-where-unique.input';

@InputType()
export class StnkUncheckedCreateNestedOneWithoutPkbInput {

    @Field(() => StnkCreateWithoutPkbInput, {nullable:true})
    @Type(() => StnkCreateWithoutPkbInput)
    create?: StnkCreateWithoutPkbInput;

    @Field(() => StnkCreateOrConnectWithoutPkbInput, {nullable:true})
    @Type(() => StnkCreateOrConnectWithoutPkbInput)
    connectOrCreate?: StnkCreateOrConnectWithoutPkbInput;

    @Field(() => StnkWhereUniqueInput, {nullable:true})
    @Type(() => StnkWhereUniqueInput)
    connect?: Prisma.AtLeast<StnkWhereUniqueInput, 'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'>;
}
